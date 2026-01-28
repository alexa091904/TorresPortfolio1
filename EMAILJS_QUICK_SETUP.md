# EmailJS Configuration - Quick Reference

## What You Need to Do

### 1. Sign Up for EmailJS
Visit: https://www.emailjs.com/
- Create a FREE account
- Verify your email

### 2. Connect Your Gmail (alextorres9194@gmail.com)
- In EmailJS Dashboard → Email Services
- Click "Add Service" → Select "Gmail"
- Authorize with your Gmail account
- **Copy the Service ID** (looks like: `service_abc123def456`)

### 3. Create Email Template
- In EmailJS Dashboard → Email Templates
- Click "Create New Template"
- Set up template with these variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{subject}}` - Message subject
  - `{{message}}` - Message content
  - `{{to_email}}` - Recipient (your Gmail)
- **Copy the Template ID** (looks like: `template_xyz789abc123`)

### 4. Get Your Public Key
- In EmailJS Dashboard → Account (or Integration)
- **Copy the Public Key** (looks like: `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o`)

### 5. Update src/sections/Contact.jsx

Find these three lines and replace the placeholder values:

**Line 22:**
```javascript
// OLD:
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')

// NEW (paste your actual Public Key):
emailjs.init('YOUR_PUBLIC_KEY_HERE')
```

**Line 43:**
```javascript
// OLD:
'YOUR_EMAILJS_SERVICE_ID',

// NEW (paste your actual Service ID):
'YOUR_SERVICE_ID_HERE',
```

**Line 44:**
```javascript
// OLD:
'YOUR_EMAILJS_TEMPLATE_ID',

// NEW (paste your actual Template ID):
'YOUR_TEMPLATE_ID_HERE',
```

### 6. Test It!
```bash
npm run dev
```
- Fill out the contact form
- Click "Send Message"
- Check your Gmail inbox

## Example (DON'T COPY THESE - They're just examples)
```javascript
emailjs.init('abc123def456ghi789jkl012mno345pqr')
await emailjs.send(
  'service_s1a2t3i4o5n6i7d',
  'template_t1e2m3p4l5a6t7e8i9d',
  templateParams
)
```

## Need Help?
- EmailJS Docs: https://www.emailjs.com/docs/
- For any issues, check EMAIL_SETUP_GUIDE.md for detailed instructions
