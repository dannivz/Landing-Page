import { CONFIG } from '../config/config'

function Refund() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Refund Policy
          </h1>
          <p className="text-gray-600">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Guarantee Badge */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {CONFIG.guarantee}-Day Money-Back Guarantee
            </h2>
            <p className="text-xl text-gray-700">
              We're confident you'll love {CONFIG.productName}. If you're not
              satisfied for any reason, we'll refund your money—no questions
              asked.
            </p>
          </div>

          {/* ... (todas tus secciones siguen igual) ... */}

          {/* Contact Section */}
          <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before requesting a refund, we'd love to help you get the most out
              of the course. Please reach out to us with any questions or
              concerns:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {CONFIG.email}
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{' '}
                <a
                  href={`https://wa.me/${CONFIG.whatsapp}`}
                  className="text-blue-600 hover:underline"
                >
                  +{CONFIG.whatsapp}
                </a>
              </li>
              <li>
                <strong>Hours:</strong> {CONFIG.officeHours}
              </li>
            </ul>
          </section>
        </div>

        {/* ✅ Back Button corregido */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default Refund
