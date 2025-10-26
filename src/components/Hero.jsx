import { useState, useEffect } from 'react'
import { CONFIG } from '../config/config'

function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    hours: CONFIG.countdownHours,
    minutes: CONFIG.countdownMinutes,
    seconds: CONFIG.countdownSeconds
  })

  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      className="relative text-white overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-via), var(--gradient-to))`
      }}
    >
      {/* Fondos animados */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob" style={{ backgroundColor: 'var(--color-accent)' }}></div>
      <div className="absolute top-40 right-10 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000" style={{ backgroundColor: 'var(--color-primary)' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        {/* Badge */}
        <div className="inline-block mb-8 animate-bounce">
          <div className="glass-dark px-8 py-3 rounded-full shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-sm uppercase tracking-wider text-white">
                Limited Time - Only 50 Spots Left
              </span>
            </div>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight animate-fadeIn">
          {CONFIG.tagline.split('In Just')[0]}<br />
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, var(--color-accent), white)`
            }}
          >
            In Just {CONFIG.tagline.split('In Just')[1]}
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed animate-fadeIn animation-delay-200">
          The complete course you need to generate{' '}
          <span className="font-bold text-white">
            {CONFIG.currency}{CONFIG.currentPrice * 100}+/month
          </span>{' '}
          as a freelancer or digital entrepreneur.
        </p>

        {/* Timer responsive */}
        <div className="mb-12 inline-block glass-dark rounded-3xl px-6 py-6 shadow-2xl animate-scaleIn animation-delay-300">
          <p className="text-sm uppercase tracking-wider mb-4 text-white/80 text-center">Offer expires in:</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-center max-w-[700px] mx-auto">
            {/* Hours */}
            <div className="bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm flex-1 min-w-[60px]">
              <div className="text-3xl sm:text-5xl font-bold mb-1">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-xs uppercase text-white/70">Hours</div>
            </div>
            <div className="text-3xl sm:text-5xl font-bold self-center mx-1">:</div>

            {/* Minutes */}
            <div className="bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm flex-1 min-w-[60px]">
              <div className="text-3xl sm:text-5xl font-bold mb-1">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-xs uppercase text-white/70">Minutes</div>
            </div>
            <div className="text-3xl sm:text-5xl font-bold self-center mx-1">:</div>

            {/* Seconds */}
            <div className="bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm flex-1 min-w-[60px]">
              <div className="text-3xl sm:text-5xl font-bold mb-1">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-xs uppercase text-white/70">Seconds</div>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeIn animation-delay-400">
          <button 
            onClick={scrollToPrice}
            className="group relative px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            style={{ background: 'white', color: 'var(--gradient-from)' }}
          >
            <span className="relative z-10">Get Started - {CONFIG.currency}{CONFIG.currentPrice}</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>

          <button 
            onClick={() => setIsVideoOpen(true)}
            className="glass-dark px-12 py-5 rounded-full font-bold text-xl text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
              </svg>
              Watch Preview
            </div>
          </button>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap justify-center gap-12 mb-20 text-center animate-fadeIn animation-delay-500">
          <div className="group">
            <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
              {CONFIG.students.toLocaleString()}+
            </div>
            <div className="text-white/80">Active Students</div>
          </div>
          <div className="group">
            <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
              {CONFIG.rating}★
            </div>
            <div className="text-white/80">Average Rating</div>
          </div>
          <div className="group">
            <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
              {CONFIG.guarantee}
            </div>
            <div className="text-white/80">Day Guarantee</div>
          </div>
        </div>

        {/* Preview image */}
        <div className="mt-20 animate-scaleIn animation-delay-500">
          <div className="glass rounded-3xl p-8 max-w-5xl mx-auto border border-white/20 shadow-2xl backdrop-blur-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
              alt={CONFIG.productName}
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Modal de video */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 transition-opacity duration-500"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-4xl mx-4 md:mx-0 animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-8 -right-8 text-white text-4xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-black/70 transition"
            >
              &times;
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-3xl shadow-2xl">
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-3xl"
                src="https://www.youtube.com/embed/6stlCkUDG_s?autoplay=1&rel=0"
                title="Video Preview"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
