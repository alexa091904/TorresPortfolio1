# Email Integration Setup Guide

## Overview
Your portfolio now has email integration using **EmailJS**, which allows contact form submissions to be sent directly to your Gmail inbox without requiring a backend server.

## Setup Steps

### Step 1: Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create an Email Service
1. Log in to your EmailJS dashboard
2. Go to **Email Services** (or **My Email Services**)
3. Click **Add Service**
4. Select **Gmail** as the service provider
5. Follow the authorization steps:
   - Click **Connect Gmail Account**
   - Log in with your Gmail account (alextorres9194@gmail.com)
   - Authorize EmailJS to send emails on your behalf
6. Name your service (e.g., "Gmail Service")
7. Copy the **Service ID** (you'll need this)

### Step 3: Create an Email Template
1. In your EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Set up your template with the following fields:
   - **Subject:** `{{subject}}`
   - **To Email:** `{{to_email}}`
   - **From Name:** `{{from_name}}`
   - **From Email:** `{{from_email}}`
   - **Message Body:** Add a professional template using the variables below

#### Recommended Template Body:
```
Hello,

You have received a new message from your portfolio contact form.

**From:** {{from_name}} ({{from_email}})
**Subject:** {{subject}}

**Message:**
{{message}}

---
This email was sent from your portfolio website.
```

4. Save the template and copy the **Template ID**

### Step 4: Get Your Public Key
1. In your EmailJS dashboard, go to **Account** (or **Integration**)
2. Copy your **Public Key**

### Step 5: Update Contact.jsx
Replace the placeholder values in `src/sections/Contact.jsx`:

```javascript
// Line 22 - Replace with your EmailJS Public Key
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')

// Line 43 - Replace with your EmailJS Service ID
'YOUR_EMAILJS_SERVICE_ID'

// Line 44 - Replace with your EmailJS Template ID
'YOUR_EMAILJS_TEMPLATE_ID'
```

**Example:**
```javascript
emailjs.init('1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p')
await emailjs.send(
  'service_a1b2c3d4e5f6g7h8',
  'template_x1y2z3a4b5c6d7e8f',
  templateParams
)
```

### Step 6: Test the Form
1. Save your changes
2. Run your portfolio: `npm run dev`
3. Fill out the contact form with test data
4. Click "Send Message"
5. Check your Gmail inbox to confirm the email was received

## Email Credentials Location
- **EmailJS Public Key:** Dashboard → Account/Integration
- **Service ID:** Dashboard → Email Services → Gmail Service
- **Template ID:** Dashboard → Email Templates

## Security Notes
- The Public Key is safe to expose in frontend code (it's not a secret)
- Your Gmail password is NOT stored anywhere
- EmailJS handles the authentication securely
- Consider rate limiting in production to prevent abuse

## Troubleshooting

### Emails not arriving?
1. Check your Spam/Promotions folder
2. Verify the email template is correctly set up
3. Check the browser console for error messages
4. Ensure all IDs are correctly copied without extra spaces

### Authorization Issues?
1. Make sure you're using the correct Gmail account
2. Re-authorize the Gmail service in EmailJS
3. Try disconnecting and reconnecting the Gmail service

### Template Variables Not Working?
- Ensure variables match exactly: `{{variable_name}}`
- Check that form field names match the template variables
- Current form fields: `name`, `email`, `subject`, `message`

## Free Tier Limits
- EmailJS free tier allows **200 emails per month**
- Perfect for a portfolio
- Upgrade to a paid plan if you need more volume

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/contact/
