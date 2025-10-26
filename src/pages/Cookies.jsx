import { CONFIG } from '../config/config'

function Cookies() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Cookie Policy
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
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your device when
              you visit our website. They help us provide you with a better
              experience by remembering your preferences and understanding how
              you use our site.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. How We Use Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              {CONFIG.brandName} uses cookies to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Keep you signed in to your account</li>
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve our services and user experience</li>
              <li>Provide personalized content and recommendations</li>
              <li>Measure the effectiveness of our marketing campaigns</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Types of Cookies We Use
            </h2>

            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                    ✓
                  </span>
                  Essential Cookies
                </h3>
                <p className="text-gray-700 ml-11">
                  These cookies are necessary for the website to function
                  properly. They enable core functionality such as security,
                  network management, and accessibility. You cannot opt out of
                  these cookies.
                </p>
                <p className="text-sm text-gray-600 ml-11 mt-2">
                  <strong>Examples:</strong> Session cookies, authentication
                  cookies
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                    📊
                  </span>
                  Analytics Cookies
                </h3>
                <p className="text-gray-700 ml-11">
                  These cookies help us understand how visitors interact with
                  our website by collecting and reporting information
                  anonymously.
                </p>
                <p className="text-sm text-gray-600 ml-11 mt-2">
                  <strong>Examples:</strong> Google Analytics, page views, bounce
                  rate
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                    🎯
                  </span>
                  Marketing Cookies
                </h3>
                <p className="text-gray-700 ml-11">
                  These cookies track your online activity to help advertisers
                  deliver more relevant advertising or limit how many times you
                  see an ad.
                </p>
                <p className="text-sm text-gray-600 ml-11 mt-2">
                  <strong>Examples:</strong> Facebook Pixel, Google Ads,
                  retargeting
                </p>
              </div>

              {/* Preference Cookies */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                    ⚙️
                  </span>
                  Preference Cookies
                </h3>
                <p className="text-gray-700 ml-11">
                  These cookies enable the website to remember choices you make
                  and provide enhanced, more personalized features.
                </p>
                <p className="text-sm text-gray-600 ml-11 mt-2">
                  <strong>Examples:</strong> Language preferences, theme
                  selection
                </p>
              </div>
            </div>
          </section>

          {/* ... (resto de secciones igual) ... */}

          {/* Contact */}
          <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
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
                <strong>Location:</strong> {CONFIG.location}
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

export default Cookies
