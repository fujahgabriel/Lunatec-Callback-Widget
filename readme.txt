=== Lunatec Callback Widget ===
Contributors: fujahgabriel
Tags: callback, contact form, floating button, hubspot, lead generation
Requires at least: 6.0
Tested up to: 6.9
Requires PHP: 7.4
Stable tag: 1.0.3
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A simple, customizable plugin for callback requests via a floating button and modal. Includes Hubspot, Slack and Email integrations.

== Description ==

**Lunatec Callback Widget** adds a floating button to your WordPress site. When clicked, it opens a clean, responsive modal form where visitors can leave their name, phone number, and other details to request a call back.

The plugin is designed to be lightweight, easy to configure, and developer-friendly.

### Features

*   **Floating Request Button**: A customizable floating button that stays visible as users scroll.
*   **Modal Form**: A user-friendly popup form for collecting callback requests.
*   **International Phone Support**: Integrated international telephone input with country flags and codes.
*   **Admin Management**: View all callback requests in a dedicated admin dashboard with status badges.
*   **CSV Export**: Easily export all requests to a CSV file for external processing.
*   **CRM & Integrations**:
    *   **HubSpot Sync**: Automatically create contacts in HubSpot when a request is received.
    *   **Slack Notifications**: Receive instant notifications in your Slack channel via Webhook.
    *   **Email Notifications**: Get notified via email immediately.
*   **Customization**:
    *   Change button text, colors, and positioning (Top/Bottom, Left/Right).
    *   **Precision Control**: Adjust specific X/Y margins for the floating button.
    *   Customize modal texts and size.
*   **Shortcode Support**: Use `[lcbw_callback_button]` to place a button anywhere.

== Installation ==

1.  Upload the `lunatec-callback-widget` folder to the `/wp-content/plugins/` directory.
2.  Activate the plugin through the 'Plugins' menu in WordPress.
3.  Go to **Simple Call Me Back > Settings** to configure the button appearance and form options.
4.  Go to **Simple Call Me Back > Requests** to view submissions.

== Frequently Asked Questions ==

= Can I change the position of the floating button? =
Yes, you can choose between Bottom Right, Bottom Left, Top Right, and Top Left in the settings page. You can also define specific X and Y margins.

= Where is the data stored? =
The data is stored in your WordPress database in a custom table created by the plugin (`wp_lcbw_requests`).

= How do I get a HubSpot API Key? =
Go to your HubSpot Settings > Integrations > Private Apps. Create a new app, select the "crm.objects.contacts.write" scope, and paste the Access Token into the plugin settings.

== External services ==

This plugin may connect to external third-party services depending on your configuration. Below is a comprehensive list of all external services this plugin uses, what data is transmitted, and under which conditions:

= HubSpot CRM Integration =
**What the service is**: HubSpot is a customer relationship management (CRM) platform used for managing contacts and leads.
**What it's used for**: When enabled, this plugin automatically creates or updates contact records in your HubSpot CRM whenever a visitor submits a callback request.
**What data is sent**: Full name, phone number, job title/position, company name, and lifecycle stage (automatically set to "lead").
**When data is sent**: Data is transmitted only when: (1) a visitor successfully submits a callback request form, (2) HubSpot integration is enabled in plugin settings, and (3) a valid HubSpot API key is configured.
**Service Provider**: HubSpot, Inc.
**Terms of Service**: https://legal.hubspot.com/terms-of-service
**Privacy Policy**: https://legal.hubspot.com/privacy-policy

= Slack Integration =
**What the service is**: Slack is a business communication platform that supports webhook notifications.
**What it's used for**: When enabled, this plugin sends instant notifications to a specified Slack channel whenever a new callback request is submitted.
**What data is sent**: Visitor's full name, phone number, job title/position (if provided), and company name (if provided).
**When data is sent**: Data is transmitted only when: (1) a visitor successfully submits a callback request form, (2) Slack integration is enabled in plugin settings, and (3) a valid Slack webhook URL is configured.
**Service Provider**: Slack Technologies, LLC
**Terms of Service**: https://slack.com/terms-of-service
**Privacy Policy**: https://slack.com/privacy-policy

= Email Notifications =
**What the service is**: The plugin uses WordPress's built-in email functionality (wp_mail()) to send email notifications.
**What it's used for**: Sends email notifications to site administrators when new callback requests are submitted.
**What data is sent**: Visitor's full name, phone number, job title/position (if provided), and company name (if provided).
**When data is sent**: Email notifications are sent only when: (1) a visitor successfully submits a callback request form, (2) email notifications are enabled in plugin settings, and (3) a valid notification email address is configured.
**Important Note**: Email notifications use WordPress's native wp_mail() function and do not directly connect to external services unless your WordPress installation is configured to use external email services.

== Screenshots ==

1. Modal Form
2. Settings Page
3. Requests Dashboard

== Changelog ==

= 1.0.3 =
*   Improvement: Enhanced documentation and comprehensive external services disclosure.
*   Fix: Minor code improvements and optimizations.

= 1.0.2 =
*   New: Added Email Notification support.
*   New: Added Slack Webhook integration.
*   Improvement: Added status badges (New, Contacted, Closed) to the admin list.

= 1.0.1 =
*   New: HubSpot Integration.
*   New: Margin X and Y positioning settings.
*   Fixed: Code refactoring and constants.

= 1.0.0 =
*   Initial Release.
