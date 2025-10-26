import { EMAIL_CONFIG } from '../config/config'

// ============================================
// 📧 SERVICIO DE EMAIL MARKETING
// Soporta: Mailchimp, ConvertKit, Webhook
// ============================================

export const subscribeEmail = async (email) => {
  try {
    switch (EMAIL_CONFIG.provider) {
      case 'mailchimp':
        return await subscribeMailchimp(email)
      
      case 'convertkit':
        return await subscribeConvertKit(email)
      
      case 'webhook':
        return await subscribeWebhook(email)
      
      default:
        throw new Error('Provider no configurado')
    }
  } catch (error) {
    console.error('Error al suscribir:', error)
    throw error
  }
}

// 🔹 MAILCHIMP
async function subscribeMailchimp(email) {
  const { apiKey, audienceId, serverPrefix } = EMAIL_CONFIG.mailchimp
  
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `apikey ${apiKey}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.detail || 'Error al suscribir')
  }

  return await response.json()
}

// 🔹 CONVERTKIT
async function subscribeConvertKit(email) {
  const { apiKey, formId } = EMAIL_CONFIG.convertkit
  
  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: apiKey,
      email: email,
    }),
  })

  if (!response.ok) {
    throw new Error('Error al suscribir en ConvertKit')
  }

  return await response.json()
}

// 🔹 WEBHOOK GENÉRICO (Make.com, Zapier, n8n)
async function subscribeWebhook(email) {
  const { url } = EMAIL_CONFIG.webhook
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      timestamp: new Date().toISOString(),
      source: 'landing-page',
    }),
  })

  if (!response.ok) {
    throw new Error('Error al enviar al webhook')
  }

  return { success: true }
}