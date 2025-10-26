import { CONFIG } from "../config/config"

function Footer({ scrollToPrice }) {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="text-white">
      {/* 🔹 CTA superior antes del footer principal */}
      <div 
        className="py-16"
        style={{
          background: `linear-gradient(to right, #1E40AF, #2563EB, #5B21B6)` // Azul intenso → azul medio → toque morado
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            Start Your Transformation Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Join the {CONFIG.students.toLocaleString()}+ students who are already generating income
          </p>
          <button
            onClick={scrollToPrice}
            className="bg-white text-[var(--color-primary)] px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition-all shadow-2xl"
          >
            Get Access Now For {CONFIG.currency}{CONFIG.currentPrice}
          </button>
          <p className="mt-6 text-sm text-white/80">
            🔒 30-day guarantee | ✅ Instant access
          </p>
        </div>
      </div>

      {/* 🔹 Footer principal */}
      <div className="bg-[var(--color-bg-dark)] py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            
            {/* Columna 1: Marca */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4 text-white">
                {CONFIG.brandName}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Transform your professional career with the most effective digital marketing strategies on the market.
              </p>
              <div className="flex gap-4">
                <a href={CONFIG.socials?.twitter || "#"} aria-label="Twitter" 
                   className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:bg-[var(--color-primary)] text-white shadow-sm">
                  <span className="text-xl">𝕏</span>
                </a>
                <a href={CONFIG.socials?.linkedin || "#"} aria-label="LinkedIn" 
                   className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:bg-[var(--color-primary)] text-white shadow-sm">
                  <span className="text-xl">in</span>
                </a>
                <a href={CONFIG.socials?.facebook || "#"} aria-label="Facebook" 
                   className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:bg-[var(--color-primary)] text-white shadow-sm">
                  <span className="text-xl">f</span>
                </a>
                <a href={CONFIG.socials?.youtube || "#"} aria-label="YouTube" 
                   className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:bg-[var(--color-primary)] text-white shadow-sm">
                  <span className="text-xl">▶</span>
                </a>
              </div>
            </div>
            
            {/* Columna 2: Curso */}
            <div>
              <h4 className="font-bold mb-4 text-lg">The Course</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#content" className="hover:text-white transition">Full Content</a></li>
                <li><a href="#benefits" className="hover:text-white transition">Benefits</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            
            {/* Columna 3: Legal */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href={CONFIG.legal?.terms || "#"} className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href={CONFIG.legal?.privacy || "#"} className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href={CONFIG.legal?.refund || "#"} className="hover:text-white transition">Refund Policy</a></li>
                <li><a href={CONFIG.legal?.cookies || "#"} className="hover:text-white transition">Cookie Policy</a></li>
                <li><a href={CONFIG.legal?.notice || "#"} className="hover:text-white transition">Legal Notice</a></li>
              </ul>
            </div>
            
            {/* Columna 4: Contacto */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-3">📧</span>
                  <a href={`mailto:${CONFIG.email}`} className="hover:text-white transition">
                    {CONFIG.email}
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">💬</span>
                  <a href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    WhatsApp: +{CONFIG.whatsapp}
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">⏰</span>
                  <span>{CONFIG.officeHours || "Mon-Fri: 9am - 6pm (EST)"}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">📍</span>
                  <span>{CONFIG.location || "Miami, FL - USA"}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 🔹 Certificaciones y sellos */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>100% Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>SSL Certificate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>{CONFIG.students.toLocaleString()}+ Students</span>
              </div>
            </div>
          </div>

          {/* 🔹 Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">
              © {currentYear} {CONFIG.brandName}. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mb-4">
              This site is not part of Facebook, Google or Instagram. It is also not endorsed by them in any way.
            </p>
            <button 
              onClick={scrollToTop}
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:bg-[var(--color-primary)] hover:text-white shadow-sm"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
