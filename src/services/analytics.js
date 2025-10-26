import { ANALYTICS } from '../config/config'

// ============================================
// 📊 TRACKING DE EVENTOS
// ============================================

export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...params,
      send_to: ANALYTICS.googleAnalyticsId,
    })
    console.log('📊 Event tracked:', eventName, params)
  }
}

// Eventos predefinidos
export const analytics = {
  // Click en botón de compra
  clickBuyButton: (price) => {
    trackEvent('click_buy_button', {
      currency: 'USD',
      value: price,
    })
  },

  // Ver sección de precios
  viewPricing: () => {
    trackEvent('view_pricing')
  },

  // Suscripción al popup
  submitEmail: (email) => {
    trackEvent('generate_lead', {
      method: 'popup',
    })
  },

  // Click en WhatsApp
  clickWhatsApp: () => {
    trackEvent('contact', {
      method: 'whatsapp',
    })
  },

  // Inicio de checkout
  beginCheckout: (price) => {
    trackEvent('begin_checkout', {
      currency: 'USD',
      value: price,
    })
  },
}