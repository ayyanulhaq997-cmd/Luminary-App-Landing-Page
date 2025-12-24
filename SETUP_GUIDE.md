
# 🚀 Luminary Landing Page - Setup & Hand-over Guide

Welcome to your new mobile app landing page! This guide will show you how to customize the site, link it to your app, and set up the contact form.

---

## 1. Connecting Your App (Links & Assets)

To direct visitors to your mobile app, you need to update the download buttons in two places:

### Hero Section (`components/Hero.tsx`)
Find the `<a>` tags in the Hero section. Replace the `#` in `href="#"` with your actual store links:
- **App Store**: `https://apps.apple.com/app/your-app-id`
- **Google Play**: `https://play.google.com/store/apps/details?id=your.package.name`

### Phone Mockup Image
The phone screenshot is currently a placeholder. To change it:
- Open `components/Hero.tsx`.
- Find the `<img>` tag inside the phone mockup container.
- Update the `src` attribute to point to your own app screenshot (e.g., `/assets/my-app-screen.png`).

---

## 2. Setting Up the Contact Form (Email Delivery)

The form uses **Formspree** to send emails without needing a backend.

1. Go to [formspree.io](https://formspree.io/) and create a free account.
2. Create a "New Form" and copy your **Form ID** (e.g., `mqkjpnrz`).
3. Open `components/Contact.tsx`.
4. Replace `YOUR_FORMSPREE_ID` in the `FORM_ENDPOINT` variable with your ID.
5. Save the file. Your form is now working!

---

## 3. Editing Content (Text & FAQ)

Most content is organized into easy-to-edit constants:

- **Features**: Edit the `FEATURES` array in `components/Features.tsx`.
- **Testimonials**: Edit the `TESTIMONIALS` array in `components/Testimonials.tsx`.
- **FAQ**: Edit the `FAQS` array in `components/FAQ.tsx`.
- **About Section**: Direct text changes can be made in `components/About.tsx`.

---

## 4. AI Assistant Configuration

The AI assistant uses the **Gemini API**. 

### How to use it:
- Click the floating chat bubble on the site.
- If no key is set, click **"Connect API Key"**.
- This opens a dialog provided by the environment to select a valid Google AI Studio key.

### Customizing the AI Persona:
- Open `services/geminiService.ts`.
- Edit the `SYSTEM_INSTRUCTION` string to change how the AI talks about your app or what details it focuses on.

---

## 5. Deployment

This is a static React application using standard ES6 modules.
- **Hosting**: You can host this on Netlify, Vercel, or GitHub Pages.
- **Domain**: Point your custom domain to your hosting provider.

### Maintenance
- **Colors**: If you want to change the primary brand color, search for `indigo-600` or `indigo-100` in the files and replace it with your preferred Tailwind color (e.g., `blue-600`, `emerald-600`).

---

**Need more help?** Contact support at hello@luminaryapp.com.
