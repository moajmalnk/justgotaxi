# Email Setup Guide

This guide will help you set up EmailJS to send contact form submissions to justgotaxi.com@gmail.com.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your email provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** 🚕 New Customer Inquiry - {{from_name}} | JustGo Taxi

**Body (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 32px 24px; text-align: center;">
      <div style="background-color: rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 16px; display: inline-block;">
        <div style="color: #ffffff; font-size: 24px; font-weight: 700; margin-bottom: 4px;">JustGo Taxi</div>
        <div style="color: rgba(255, 255, 255, 0.8); font-size: 14px; font-weight: 500;">Professional Taxi Services</div>
      </div>
    </div>

    <!-- Content -->
    <div style="padding: 32px 24px;">
      <div style="background-color: #f1f5f9; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
        <div style="color: #1e293b; font-size: 16px; font-weight: 600; margin-bottom: 4px;">📧 New Contact Form Submission</div>
        <div style="color: #64748b; font-size: 14px;">A new inquiry has been received and requires your attention.</div>
      </div>

      <!-- Contact Details Card -->
      <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);">
        <div style="display: flex; align-items: flex-start; gap: 16px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); border-radius: 50%; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <div style="color: #ffffff; font-size: 20px; font-weight: 600;">{{from_name | slice:0:1 | upper}}</div>
          </div>
          <div style="flex: 1;">
            <div style="color: #1e293b; font-size: 18px; font-weight: 700; margin-bottom: 8px;">{{from_name}}</div>
            <div style="color: #64748b; font-size: 13px; margin-bottom: 12px; background-color: #f8fafc; padding: 6px 12px; border-radius: 6px; display: inline-block;">
              📅 {{time}}
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
              <div style="display: flex; align-items: center; gap: 6px; color: #475569; font-size: 14px;">
                <span style="color: #3b82f6;">📧</span>
                <a href="mailto:{{from_email}}" style="color: #3b82f6; text-decoration: none; font-weight: 500;">{{from_email}}</a>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; color: #475569; font-size: 14px;">
                <span style="color: #3b82f6;">📞</span>
                <a href="tel:{{phone}}" style="color: #3b82f6; text-decoration: none; font-weight: 500;">{{phone}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Message Section -->
      <div style="background-color: #f8fafc; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0;">
        <div style="color: #1e293b; font-size: 16px; font-weight: 600; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span style="color: #3b82f6;">💬</span>
          Customer Message
        </div>
        <div style="color: #374151; font-size: 15px; line-height: 1.6; background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap;">{{message}}</div>
      </div>

      <!-- Action Buttons -->
      <div style="margin-top: 24px; text-align: center;">
        <div style="display: inline-flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
          <a href="mailto:{{from_email}}?subject=Re: Your inquiry from JustGo Taxi&body=Hi {{from_name}},%0D%0A%0D%0AThank you for contacting JustGo Taxi. We have received your message and will get back to you shortly.%0D%0A%0D%0ABest regards,%0D%0AJustGo Taxi Team" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px;">
            <span>📧</span>
            Reply to Customer
          </a>
          <a href="tel:{{phone}}" style="background: linear-gradient(135deg, #10b981, #059669); color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px;">
            <span>📞</span>
            Call Customer
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
      <div style="color: #64748b; font-size: 12px; margin-bottom: 8px;">
        This email was automatically generated from your website contact form.
      </div>
      <div style="color: #94a3b8; font-size: 11px;">
        JustGo Taxi • Professional Taxi Services • Pontypridd, South Wales
      </div>
    </div>
  </div>
</body>
</html>
```

4. Save the template and note down your **Template ID**

**Note:** This is a professional, responsive HTML template with:
- Modern gradient design and branding
- Clickable contact links (email/phone)
- Action buttons for quick replies
- Mobile-responsive layout
- Professional typography and spacing

## Step 4: Get Public Key

1. Go to "Account" in the EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Configure Environment Variables

Create a `.env` file in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual IDs and keys.

## Step 6: Test the Setup

1. Start the development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the contact form
4. Check the specified email address (justgotaxi.com@gmail.com) for the message

## Troubleshooting

- Make sure all environment variables are correctly set
- Check the browser console for any error messages
- Verify that your EmailJS service is properly configured
- Ensure the email template uses the correct variable names

## Template Variables Used

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Sender's phone number
- `{{message}}` - Sender's message
- `{{time}}` - Formatted timestamp (UK timezone)
- `{{reply_to}}` - Reply-to email (same as from_email)
- `{{to_email}}` - Recipient email (justgotaxi.com@gmail.com)
