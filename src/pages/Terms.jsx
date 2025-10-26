import { CONFIG } from '../config/config'

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Terms & Conditions
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
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using {CONFIG.productName} (the "Course"), you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Course Access
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Upon successful payment, you will receive:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Lifetime access to all course materials</li>
              <li>Access to future updates at no additional cost</li>
              <li>Access to the private community</li>
              <li>Certificate upon completion</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All course materials, including but not limited to videos,
              documents, templates, and resources, are the intellectual property
              of {CONFIG.brandName}. You may not reproduce, distribute, or
              create derivative works without explicit written permission.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. User Conduct
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Share your login credentials with others</li>
              <li>Download and redistribute course materials</li>
              <li>
                Use the course content for commercial purposes without
                authorization
              </li>
              <li>Harass or harm other community members</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Refund Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We offer a {CONFIG.guarantee}-day money-back guarantee. If you're
              not satisfied with the course for any reason, contact us at{' '}
              <a
                href={`mailto:${CONFIG.email}`}
                className="text-blue-600 hover:underline"
              >
                {CONFIG.email}
              </a>{' '}
              within {CONFIG.guarantee} days of purchase for a full refund. No
              questions asked.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The course is provided "as is" without warranties of any kind.
              While we strive to provide accurate and up-to-date information, we
              make no guarantees about specific results you may achieve. Your
              success depends on your own effort, dedication, and circumstances.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {CONFIG.brandName} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting
              from your use or inability to use the course.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Account Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to terminate or suspend access to the course
              immediately, without prior notice, for conduct that we believe
              violates these Terms or is harmful to other users, us, or third
              parties.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes via email. Continued use of
              the course after changes constitutes acceptance of the new terms.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-none text-gray-700 space-y-2 mt-4">
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

        {/* Back Button */}
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

export default Terms
