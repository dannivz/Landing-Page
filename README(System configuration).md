# 🚀 Landing Page - Quick Setup Guide

---

## 📦 Installation

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

---

## ⚙️ Main Configuration

### 📍 `src/config/config.js`

**Change only this:**

```javascript
export const CONFIG = {
  // YOUR BRAND
  brandName: "Your Company",
  productName: "Your Product",
  tagline: "Your main message",
  
  // PRICING
  originalPrice: 997,
  currentPrice: 197,
  currency: "$",
  
  // CONTACT
  email: "your@email.com",
  whatsapp: "1234567890",        // Numbers only
  location: "Miami, FL",
  
  // NUMBERS
  students: 5000,
  rating: 4.9,
  guarantee: 30,
  
  // STRIPE
  stripePaymentLink: "https://buy.stripe.com/...",
}
```

---

## 💳 Stripe (Payments)

### 1. Payment Link
1. [stripe.com](https://stripe.com) → Products → Add Product
2. Create payment link
3. Copy the link

### 2. Configure

**📍 `src/config/config.js`**
```javascript
stripePaymentLink: "https://buy.stripe.com/test_XXX",
```

**📍 `src/config/stripe.js`**
```javascript
export const STRIPE_PUBLISHABLE_KEY = 'pk_live_XXX';

export const PRODUCT_CONFIG = {
  name: 'Your Product',
  price: 19700,  // In cents: $197 = 19700
  currency: 'usd',
};
```

---

## 📧 Email Marketing (Optional)

**📍 `src/config/config.js`**

```javascript
// Option 1: Webhook (Easiest)
export const EMAIL_CONFIG = {
  provider: "webhook",
  webhook: {
    url: "https://hook.us1.make.com/XXX",
  },
}

// Option 2: Mailchimp
export const EMAIL_CONFIG = {
  provider: "mailchimp",
  mailchimp: {
    apiKey: "your-api-key",
    audienceId: "your-audience-id",
    serverPrefix: "us1",
  },
}
```

---

## 🎨 Customization

### Colors
**📍 `src/config/themes.js`**
```javascript
colors: {
  primary: "#6366f1",
  secondary: "#8b5cf6",
  accent: "#10b981",
}
```

### Content

| What | File |
|------|------|
| Hero title | `src/components/Hero.jsx` |
| Modules | `src/components/Features.jsx` |
| Testimonials | `src/components/Testimonials.jsx` |
| FAQ | `src/components/FAQ.jsx` |

**Example in `Features.jsx`:**
```javascript
const modules = [
  {
    title: "Module 1: Your Title",
    description: "Your description",
    lessons: "12 lessons • 3h",
    image: "https://your-image.jpg"
  },
]
```

---

## 📊 Analytics (Optional)

**📍 `src/config/config.js`**
```javascript
export const ANALYTICS = {
  googleAnalyticsId: "G-XXXXXXXXXX",
  facebookPixelId: "123456789",
}
```

---

## 🚀 Deploy

```bash
# Build
npm run build

# Option 1: Vercel (Free)
npm install -g vercel
vercel

# Option 2: Netlify
# Drag 'dist' folder to netlify.com
```

---

## ✅ Pre-Launch Checklist

- [ ] `config.js` configured
- [ ] Stripe connected (test mode)
- [ ] Content updated
- [ ] Tested on mobile
- [ ] Stripe changed to production (`pk_live_`)

---

## 🆘 Troubleshooting

```bash
# Error: Module not found
rm -rf node_modules package-lock.json
npm install

# Port in use
npm run dev -- --port 3000

# Reinstall everything
npm install framer-motion @stripe/stripe-js react-router-dom
```

---

## 📞 Support

📧 support@yourdomain.com  
💬 WhatsApp: +1 234 567 8900

---

**🎉 Ready in 20 minutes:**
1. Configure `config.js` ✅
2. Connect Stripe ✅
3. Customize content ✅
4. `npm run build` ✅
5. Deploy ✅

*One purchase = One website*