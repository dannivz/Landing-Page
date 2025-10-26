import { CONFIG } from '../config/config' // 👈 Configuración global

function Benefits() {
  const benefits = [
    {
      icon: "🎯",
      title: "Learn at Your Own Pace",
      description: "Lifetime access included. Study whenever you want, from wherever you want."
    },
    {
      icon: "💰",
      title: "Guaranteed ROI",
      description: "Get your investment back in the first month or we'll refund 100% of your money."
    },
    {
      icon: "👥",
      title: "Private Community",
      description: `Join over ${CONFIG.students.toLocaleString()} entrepreneurs who are already generating income.`
    },
    {
      icon: "🎓",
      title: "Professional Certification",
      description: "Receive a verifiable certificate upon completion to boost your career."
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Learn from your phone with our exclusive app for iOS and Android."
    },
    {
      icon: "🔄",
      title: "Free Updates",
      description: "New content every month at no additional cost. Always stay up to date."
    }
  ];

  const scrollToPrice = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="benefits" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🟣 Encabezado */}
        <div className="text-center mb-20">
          <span className="font-bold text-sm uppercase tracking-wide text-[var(--color-primary)]">
            Why This Course?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-6 mt-3">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            You don't just learn theory. You get a complete system, proven and ready to implement today.
          </p>
        </div>

        {/* 💡 Lista de beneficios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-[var(--color-bg)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 group"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">
                {benefit.title}
              </h3>
              <p className="text-[var(--color-text-light)] text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* 💜 CTA secundaria */}
        <div className="mt-16 text-center">
          <p className="text-[var(--color-text-light)] text-lg mb-6">
            Over <span className="font-bold text-[var(--color-primary)]">
              {CONFIG.students.toLocaleString()} students
            </span> are already generating income with this system
          </p>
          <button 
            onClick={scrollToPrice}
            className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-primary-dark)] transform hover:scale-105 transition-all shadow-xl"
          >
            Join Now For Only {CONFIG.currency}{CONFIG.currentPrice}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
