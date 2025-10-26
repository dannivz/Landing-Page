import { useState } from 'react'
import { subscribeEmail } from '../services/emailService'

function LeadPopup({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await subscribeEmail(email)
      console.log('✅ Email registrado:', email)
      setSubmitted(true)
      setTimeout(() => {
        onClose()
        setSubmitted(false)
        setEmail('')
      }, 2500)
    } catch (err) {
      setError('Oops! Something went wrong. Please try again.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl transform animate-slideUp border border-gray-100">
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        {/* Contenido */}
        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-3xl font-extrabold text-[var(--color-primary-dark)] mb-3">
                Get Your Free Marketing Guide
              </h3>
              <p className="text-[var(--color-text-light)] text-lg">
                Download our exclusive{' '}
                <span className="font-bold text-[var(--color-secondary)]">
                  100 Marketing Strategies
                </span>{' '}
                ebook absolutely free!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-full focus:border-[var(--color-primary)] focus:outline-none text-lg disabled:opacity-50 transition-all"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] text-white py-4 rounded-full font-semibold text-lg hover:opacity-90 transform hover:scale-[1.02] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Download Free Ebook'}
              </button>
            </form>

            <p className="text-center text-[var(--color-text-lighter)] text-sm mt-4">
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center py-8 animate-scaleIn">
            <div className="text-6xl mb-4 animate-bounce text-[var(--color-accent)]">✅</div>
            <h3 className="text-2xl font-bold text-[var(--color-accent-dark)] mb-2">
              Success!
            </h3>
            <p className="text-[var(--color-text-light)]">
              Check your email for the download link.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LeadPopup
