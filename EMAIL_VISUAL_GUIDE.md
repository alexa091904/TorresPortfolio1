# Email Integration - Visual Setup Guide

## 🎯 What You Need to Do (3 Simple Steps)

```
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: CREATE EMAILJS ACCOUNT                              │
│                                                              │
│ Go to: https://www.emailjs.com/                            │
│ • Click "Sign Up"                                          │
│ • Enter your email address                                 │
│ • Verify your email                                        │
│                                                              │
│ ⏱️  Time: 2 minutes                                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ STEP 2: CONNECT GMAIL & GET YOUR 3 IDs                      │
│                                                              │
│ A) SERVICE ID                                              │
│    • Go to: Email Services                                 │
│    • Click: Add Service                                    │
│    • Select: Gmail                                         │
│    • Authorize with: alextorres9194@gmail.com             │
│    • Copy: Service ID (looks like: service_abc123...)    │
│                                                              │
│ B) TEMPLATE ID                                             │
│    • Go to: Email Templates                                │
│    • Click: Create New Template                            │
│    • Set up with variables:                               │
│      {{from_name}}  - sender's name                       │
│      {{from_email}} - sender's email                      │
│      {{subject}}    - message subject                     │
│      {{message}}    - message body                        │
│      {{to_email}}   - your Gmail                          │
│    • Copy: Template ID (looks like: template_xyz...)     │
│                                                              │
│ C) PUBLIC KEY                                              │
│    • Go to: Account                                        │
│    • Copy: Public Key (looks like: 1a2b3c4d5e...)       │
│                                                              │
│ ⏱️  Time: 10 minutes                                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ STEP 3: UPDATE 3 LINES IN Contact.jsx                       │
│                                                              │
│ File: src/sections/Contact.jsx                             │
│                                                              │
│ Find Line 36:                                              │
│   emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')                 │
│ Replace with:                                              │
│   emailjs.init('YOUR_PUBLIC_KEY_FROM_STEP_2C')            │
│                                                              │
│ Find Line 57:                                              │
│   'YOUR_EMAILJS_SERVICE_ID',                              │
│ Replace with:                                              │
│   'YOUR_SERVICE_ID_FROM_STEP_2A',                         │
│                                                              │
│ Find Line 58:                                              │
│   'YOUR_EMAILJS_TEMPLATE_ID',                             │
│ Replace with:                                              │
│   'YOUR_TEMPLATE_ID_FROM_STEP_2B',                        │
│                                                              │
│ ⏱️  Time: 3 minutes                                          │
└─────────────────────────────────────────────────────────────┘
```

## 🧪 Testing Your Setup

```bash
# 1. Start your portfolio
npm run dev

# 2. Fill out the contact form:
#    Name: Test User
#    Email: test@example.com
#    Subject: Testing Email
#    Message: This is a test

# 3. Click "Send Message"

# 4. Check your Gmail inbox
#    You should see the email appear!
```

## 📧 Example Email You'll Receive

```
To: alextorres9194@gmail.com
From: EmailJS <noreply@emailjs.com>
Subject: Testing Email

---

Hello,

You have received a new message from your portfolio contact form.

From: Test User (test@example.com)
Subject: Testing Email

Message:
This is a test

---
This email was sent from your portfolio website.
```

## 🔍 Where to Find Your IDs in EmailJS Dashboard

```
Dashboard
│
├─ Account ........................ → PUBLIC KEY (copy here)
│
├─ Email Services
│  └─ Gmail Service ............... → SERVICE ID (copy here)
│
└─ Email Templates
   └─ Your Template ............... → TEMPLATE ID (copy here)
```

## 💾 Checklist

- [ ] Created EmailJS account
- [ ] Verified email address
- [ ] Connected Gmail account
- [ ] Created email service
- [ ] Created email template with variables
- [ ] Copied Public Key
- [ ] Copied Service ID
- [ ] Copied Template ID
- [ ] Updated src/sections/Contact.jsx (Line 36)
- [ ] Updated src/sections/Contact.jsx (Line 57)
- [ ] Updated src/sections/Contact.jsx (Line 58)
- [ ] Tested form submission
- [ ] Received test email in Gmail

## ❌ If It's Not Working

### Email not sending?
1. **Check the values**
   - Did you copy your actual Public Key, Service ID, and Template ID?
   - Are there any extra spaces?

2. **Check the template**
   - Did you create the template in EmailJS?
   - Does it have the variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{to_email}}`?

3. **Check the authorization**
   - Did you authorize the Gmail service with alextorres9194@gmail.com?

### Still stuck?
- Check browser console: Press F12 → Console tab
- Look for error messages
- See EMAIL_SETUP_GUIDE.md for troubleshooting

## 📊 After Setup

- ✅ Users can contact you through your portfolio
- ✅ Emails go directly to your Gmail
- ✅ You get 200 emails/month free
- ✅ No backend server needed
- ✅ Secure and professional

## 🎉 Success!

Once set up, your contact form will:
1. Collect user information
2. Send it to your Gmail
3. Show a success message
4. Clear the form for next submission

---

**Total Setup Time: ~15 minutes**  
**Difficulty: ⭐ Very Easy**  
**Cost: FREE (for 200/month)**
