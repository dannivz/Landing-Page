import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import LeadPopup from './components/LeadPopup'
import { analytics } from './services/analytics'

function App() {
  const [showPopup, setShowPopup] = useState(false)

  const scrollToPrice = () => {
    analytics.viewPricing()
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ✅ NO pases config como prop - los componentes ya lo importan */}
      <Hero />
      <Benefits />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer scrollToPrice={scrollToPrice} />
      
      {/* ✅ WhatsAppButton lee CONFIG internamente */}
      <WhatsAppButton />
      
      <LeadPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  )
}

export default App
