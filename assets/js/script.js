document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('lcbw-modal-overlay');
    const closeBtn = document.querySelector('.lcbw-modal-close');
    const form = document.getElementById('lcbw-callback-form');
    const messageDiv = document.getElementById('lcbw-message');
    const phoneInput = document.querySelector("#lcbw-phone");
    
    let iti;
    if (phoneInput && window.intlTelInput) {
        try {
            iti = window.intlTelInput(phoneInput, {
                utilsScript: lcbw_obj.utils_url,
                preferredCountries: ['gb', 'us'],
                initialCountry: 'gb',
                separateDialCode: false, // Include dial code in input value
                autoPlaceholder: "aggressive",
                strictMode: false, // v25.x compatibility
                nationalMode: false, // Use international format
                formatOnDisplay: true,
                dropdownContainer: document.body
            });
        } catch (error) {
            console.error('Failed to initialize intl-tel-input:', error);
            iti = null;
        }
    }

    if (!modal) return;

    // Open Modal (Delegation for multiple buttons)
    document.body.addEventListener('click', function(e) {
        if (e.target.matches('#lcbw-floating-btn, .lcbw-trigger-btn, .lcbw-trigger-btn *')) {
            modal.classList.add('active');
        }
    });

    // Close Modal
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Close on click outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Form Submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.lcbw-submit-btn');
        const originalText = submitBtn.innerText;
        
        // Generate unique form ID for tracking
        const formId = 'lcbw_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';
        messageDiv.style.display = 'none';

        const formData = new FormData(form);
        
        // Handle phone input with intl-tel-input v25.x
        let phoneValue = '';
        
        if (phoneInput) {
            // Get the actual input value first
            const rawInputValue = phoneInput.value;
            
            if (iti) {
                try {
                    // For v25.x, try different methods to get the number
                    if (typeof iti.getNumber === 'function') {
                        phoneValue = iti.getNumber();
                    } else if (typeof iti.getNumber === 'undefined' && rawInputValue) {
                        // Fallback for v25.x if getNumber doesn't exist
                        const selectedCountryData = iti.getSelectedCountryData();
                        const dialCode = selectedCountryData.dialCode;
                        phoneValue = rawInputValue.startsWith('+') ? rawInputValue : '+' + dialCode + rawInputValue;
                    }
                    
                    // If still empty, use raw value
                    if (!phoneValue || phoneValue.trim() === '') {
                        phoneValue = rawInputValue;
                    }
                } catch (error) {
                    console.error('intl-tel-input error:', error);
                    phoneValue = rawInputValue;
                }
            } else {
                phoneValue = rawInputValue;
            }
            
            // Set the phone value in FormData
            if (phoneValue && phoneValue.trim() !== '') {
                formData.set('lcbw_phone', phoneValue.trim());
            }
        }

        formData.append('action', 'lcbw_submit_request');
        formData.append('nonce', lcbw_obj.nonce);

        fetch(lcbw_obj.ajax_url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            messageDiv.style.display = 'block';
            if (data.success) {
                messageDiv.className = 'lcbw-message success';
                messageDiv.innerText = data.data.message;
                form.reset();
                
                // Get form data for tracking
                const formDataForTracking = {
                    name: formData.get('lcbw_name'),
                    phone: formData.get('lcbw_phone'),
                    position: formData.get('lcbw_position'),
                    company: formData.get('lcbw_company')
                };
                
                // Track form submission with Google Tag Manager
                if (typeof dataLayer !== 'undefined') {
                    dataLayer.push({
                        'event': 'lcbw_submission',
                        'form_id': formId,
                        'form_name': 'lcbw_form',
                        'submission_status': 'success',
                        'form_data': formDataForTracking,
                        'customer_name': formDataForTracking.name,
                        'customer_phone': formDataForTracking.phone,
                        'customer_position': formDataForTracking.position,
                        'customer_company': formDataForTracking.company
                    });
                }
                
                setTimeout(() => {
                    modal.classList.remove('active');
                    messageDiv.style.display = 'none';
                }, 3000);
            } else {
                messageDiv.className = 'lcbw-message error';
                messageDiv.innerText = data.data.message || 'An error occurred';
                
                // Get form data for tracking
                const formDataForTracking = {
                    name: formData.get('lcbw_name'),
                    phone: formData.get('lcbw_phone'),
                    position: formData.get('lcbw_position'),
                    company: formData.get('lcbw_company')
                };
                
                // Track failed submission (optional)
                if (typeof dataLayer !== 'undefined') {
                    dataLayer.push({
                        'event': 'lcbw_submission',
                        'form_id': formId,
                        'form_name': 'lcbw_form',
                        'submission_status': 'error',
                        'error_message': data.data.message || 'An error occurred',
                        'form_data': formDataForTracking,
                        'customer_name': formDataForTracking.name,
                        'customer_phone': formDataForTracking.phone,
                        'customer_position': formDataForTracking.position,
                        'customer_company': formDataForTracking.company
                    });
                }
            }
        })
        .catch(error => {
            messageDiv.style.display = 'block';
            messageDiv.className = 'lcbw-message error';
            messageDiv.innerText = 'Connection error. Please try again.';
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        });
    });
});
