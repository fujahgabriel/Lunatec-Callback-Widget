=== Simple Call Me Back ===
Contributors: fujahgabriel
Tags: callback, request call, contact form, floating button, lead generation, hubspot, slack
Requires at least: 6.0
Tested up to: 6.4
Requires PHP: 7.4
Stable tag: 1.0.2
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A simple and customizable plugin that allows visitors to request a callback via a floating button and a modal form. Includes Hubspot, Slack and Email integrations.

== Description ==

**Simple Call Me Back** adds a floating button to your WordPress site. When clicked, it opens a clean, responsive modal form where visitors can leave their name, phone number, and other details to request a call back.

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
*   **Shortcode Support**: Use `[call_me_back]` to place a button anywhere.

== Installation ==

1.  Upload the `simple-call-me-back` folder to the `/wp-content/plugins/` directory.
2.  Activate the plugin through the 'Plugins' menu in WordPress.
3.  Go to **Simple Call Me Back > Settings** to configure the button appearance and form options.
4.  Go to **Simple Call Me Back > Requests** to view submissions.

== Frequently Asked Questions ==

= Can I change the position of the floating button? =
Yes, you can choose between Bottom Right, Bottom Left, Top Right, and Top Left in the settings page. You can also define specific X and Y margins.

= Where is the data stored? =
The data is stored in your WordPress database in a custom table created by the plugin (`wp_cmb_requests`).

= How do I get a HubSpot API Key? =
Go to your HubSpot Settings > Integrations > Private Apps. Create a new app, select the "crm.objects.contacts.write" scope, and paste the Access Token into the plugin settings.

== Screenshots ==

1. Modal Form
2. Settings Page
3. Requests Dashboard

== Changelog ==

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
