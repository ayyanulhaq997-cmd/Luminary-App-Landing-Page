
# 📱 Mobile App Integration Guide

Follow these steps to connect your website to your mobile app so users can download it directly on Android and iOS.

---

## 1. Locate Your Store URLs

Before you can link the website, you need the public URLs for your app listings.

### For iOS (Apple App Store)
1. Go to the [App Store Marketing Tools](https://tools.applemediaservices.com/app-store).
2. Search for your app.
3. Copy the **Content Link** (it usually looks like `https://apps.apple.com/app/your-app-name/id123456789`).

### For Android (Google Play Store)
1. Search for your app on the [Google Play Store](https://play.google.com/store/apps).
2. Copy the URL from your browser's address bar (it looks like `https://play.google.com/store/apps/details?id=com.yourcompany.yourapp`).

---

## 2. Update the Code

Open the file `components/Hero.tsx` and find the configuration section at the top:

```tsx
// components/Hero.tsx

// REPLACE THESE PLACEHOLDERS:
const APPLE_STORE_URL = "PASTE_YOUR_APP_STORE_LINK_HERE";
const GOOGLE_PLAY_URL = "PASTE_YOUR_GOOGLE_PLAY_LINK_HERE";
```

Once updated, all "Download" buttons on the site will automatically use these links.

---

## 3. Recommended: "Deep Linking"

Deep linking allows the website to talk directly to your app if the user already has it installed.

### iOS Universal Links
To support this, you must host an `apple-app-site-association` (AASA) file in a `.well-known` folder on your website's root.
1. Create a folder named `.well-known`.
2. Place a file named `apple-app-site-association` (no extension) inside it.
3. Add your App ID and paths to the JSON inside that file.

### Android App Links
Similar to iOS, you need a `assetlinks.json` file.
1. Place `assetlinks.json` in the same `.well-known` folder.
2. Include your package name and SHA-256 fingerprint.

---

## 4. Smart App Banners (Advanced)

To show a native download banner at the very top of Safari on iOS, add this tag to the `<head>` of your `index.html`:

```html
<meta name="apple-itunes-app" content="app-id=YOUR_APP_ID">
```

Replace `YOUR_APP_ID` with the numbers from your App Store URL.

---

## 5. Testing
1. **Desktop**: Clicking the buttons should open the store website in a new tab.
2. **Mobile**: Clicking the buttons should trigger the App Store or Google Play Store app directly on the user's phone.

---

**Need technical help with deep links?** Consult your app developer about "Associated Domains" (iOS) and "App Links" (Android).
