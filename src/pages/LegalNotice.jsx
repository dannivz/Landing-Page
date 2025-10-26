import { CONFIG } from '../config/config'

function LegalNotice() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Legal Notice
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Company Information</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <ul className="space-y-3 text-gray-700">
                <li><strong>Company Name:</strong> {CONFIG.brandName}</li>
                <li><strong>Business Location:</strong> {CONFIG.location}</li>
                <li><strong>Email:</strong> <a href={`mailto:${CONFIG.email}`} className="text-blue-600 hover:underline">{CONFIG.email}</a></li>
                <li><strong>WhatsApp:</strong> <a href={`https://wa.me/${CONFIG.whatsapp}`} className="text-blue-600 hover:underline">+{CONFIG.whatsapp}</a></li>
                <li><strong>Business Hours:</strong> {CONFIG.officeHours}</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Purpose of Website</h2>
            <p className="text-gray-700 leading-relaxed">
              This website is operated by {CONFIG.brandName} for the purpose of offering {CONFIG.productName}, an online educational course. The information provided on this website is for general informational purposes and does not constitute professional advice.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              All content on this website, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Text, graphics, logos, images, and videos</li>
              <li>Course materials and educational content</li>
              <li>Software, code, and interactive features</li>
              <li>Trademarks and brand elements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Are the exclusive property of {CONFIG.brandName} and are protected by international copyright laws. Unauthorized use, reproduction, or distribution is strictly prohibited.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimer of Warranties</h2>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>IMPORTANT:</strong> The content provided in {CONFIG.productName} is for educational purposes only. We make no guarantees about:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Specific income or results you may achieve</li>
                <li>The accuracy or completeness of all information</li>
                <li>That the course will meet your specific needs</li>
                <li>That the service will be uninterrupted or error-free</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Your success depends on your own effort, dedication, background, and countless other factors beyond our control.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Earnings Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              Any income claims or examples shown are exceptional results and do not guarantee that you will achieve similar results. Individual results will vary and depend on many factors including but not limited to background, experience, dedication, and work ethic. All business and income-generating activities involve risk, and past performance does not guarantee future results.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Testimonials Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              Testimonials and success stories presented on this website represent exceptional results. These individuals may have unique backgrounds, experience, or circumstances. Their results should not be considered typical or guaranteed. Your results may differ significantly.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by applicable law, {CONFIG.brandName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use or inability to use the course.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Websites</h2>
            <p className="text-gray-700 leading-relaxed">
              This website may contain links to third-party websites that are not owned or controlled by {CONFIG.brandName}. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any third-party sites you visit.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Platform Disclaimer</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                This site is not part of the Facebook, Instagram, Google, or YouTube websites. Additionally, this site is NOT endorsed by Facebook, Instagram, Google, or YouTube in any way. FACEBOOK, INSTAGRAM, GOOGLE, and YOUTUBE are trademarks of their respective companies.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of the course shall be resolved in the courts located in {CONFIG.location}.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Age Restriction</h2>
            <p className="text-gray-700 leading-relaxed">
              Our course is intended for individuals 18 years of age or older. If you are under 18, you may only use this service with the involvement and consent of a parent or legal guardian.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modifications to Service</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any aspect of the course at any time, including the availability of any features, database, or content. We may also impose limits on certain features or restrict your access to parts or all of the course without notice or liability.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              We take your privacy seriously. Please review our <a href="/privacy" className="text-blue-600 hover:underline font-semibold">Privacy Policy</a> to understand how we collect, use, and protect your personal information. By using this website, you consent to the data practices described in our Privacy Policy.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Anti-Spam Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We comply with all applicable anti-spam laws. When you provide your email address, you consent to receive communications from us. You can unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us directly.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of this Legal Notice is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that this Legal Notice will otherwise remain in full force and effect.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              This Legal Notice, together with our Terms & Conditions, Privacy Policy, Refund Policy, and Cookie Policy, constitutes the entire agreement between you and {CONFIG.brandName} regarding your use of this website and the course.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Legal Notice or any other legal matter related to our course, please don't hesitate to contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">📧 Email</p>
                <a href={`mailto:${CONFIG.email}`} className="text-blue-600 hover:underline">
                  {CONFIG.email}
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">💬 WhatsApp</p>
                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="text-blue-600 hover:underline">
                  +{CONFIG.whatsapp}
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">📍 Location</p>
                <p className="text-gray-700">{CONFIG.location}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">⏰ Hours</p>
                <p className="text-gray-700">{CONFIG.officeHours}</p>
              </div>
            </div>
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

export default LegalNotice