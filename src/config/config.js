// ============================================
// 📝 CONFIGURACIÓN CENTRALIZADA
// ⚠️ ESTE ES EL ÚNICO ARCHIVO QUE EL CLIENTE DEBE EDITAR
// ============================================

export const CONFIG = {
  // 🎨 BRANDING
  brandName: "MasterClass Pro",
  productName: "Digital Marketing MasterClass",
  tagline: "Master Digital Marketing In Just 30 Days",

  // 💰 PRECIOS
  originalPrice: 708,
  currentPrice: 45,
  currency: "$",

  // 📞 CONTACTO
  email: "support@masterclass.com",          // 👈 CAMBIAR
  whatsapp: "1234567890",                    // 👈 CAMBIAR (solo números)
  whatsappMessage: "Hi! I'm interested in the Digital Marketing MasterClass",
  officeHours: "Mon-Fri: 9am - 6pm (EST)",
  location: "Miami, FL - USA",

  // 🔗 STRIPE PAYMENT
  stripePaymentLink: "https://buy.stripe.com/test_XXXXXXXX", // 👈 CAMBIAR

  // 📊 PRUEBA SOCIAL
  students: 2847,
  rating: 4.9,
  guarantee: 30,

  // ⏰ TIMER COUNTDOWN
  countdownHours: 23,
  countdownMinutes: 45,
  countdownSeconds: 30,

  // 🌐 REDES SOCIALES
  socials: {
    twitter: "https://twitter.com/tuusuario",
    linkedin: "https://linkedin.com/company/tuempresa",
    facebook: "https://facebook.com/tupagina",
    youtube: "https://youtube.com/@tucanal",
  },

  // 📄 LINKS LEGALES
  legal: {
    terms: "/terms",
    privacy: "/privacy",
    refund: "/refund",
    cookies: "/cookies",
    notice: "/legal-notice",
  },
}

// ============================================
// 📧 EMAIL MARKETING
// ============================================
export const EMAIL_CONFIG = {
  provider: "webhook", // "mailchimp", "convertkit", o "webhook"

  mailchimp: {
    apiKey: "",
    audienceId: "",
    serverPrefix: "us1",
  },

  convertkit: {
    apiKey: "",
    formId: "",
  },

  webhook: {
    url: "https://hook.us1.make.com/tu-webhook-url", // 👈 CAMBIAR
  },
}

// ============================================
// 📊 ANALYTICS
// ============================================
export const ANALYTICS = {
  googleAnalyticsId: "G-XXXXXXXXXX", // 👈 CAMBIAR
  facebookPixelId: "",
}

// ⚠️ NOTA: Los temas están en src/config/themes.js