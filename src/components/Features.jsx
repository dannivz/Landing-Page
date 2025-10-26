function Features() {
  const modules = [
    {
      title: "Module 1: Digital Marketing Fundamentals",
      description: "Learn the basics of modern marketing, from SEO to social media. Proven strategies that work in 2025.",
      lessons: "12 lessons • 3.5 hours",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    },
    {
      title: "Module 2: Facebook & Instagram Ads",
      description: "Master the world's most powerful advertising platform. Create profitable campaigns from day 1.",
      lessons: "18 lessons • 5 hours",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop"
    },
    {
      title: "Module 3: Google Ads & YouTube Advertising",
      description: "Learn to appear first on Google and generate high-quality leads at the lowest cost possible.",
      lessons: "15 lessons • 4.2 hours",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop"
    },
    {
      title: "Module 4: Email Marketing that Converts",
      description: "Build a list of potential customers and generate sales on autopilot with email sequences.",
      lessons: "10 lessons • 2.8 hours",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop"
    },
    {
      title: "Module 5: Advanced Conversion Strategies",
      description: "Copywriting techniques, consumer psychology, and sales funnel optimization.",
      lessons: "14 lessons • 4 hours",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    },
    {
      title: "Module 6: Real Cases & Final Project",
      description: "Analyze real $10K+ campaigns and create your own marketing plan ready to implement.",
      lessons: "8 lessons • 2.5 hours",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
    }
  ]

  return (
    <section id="content" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <span 
            className="font-bold text-sm uppercase tracking-wide"
            style={{ color: 'var(--color-primary)' }}
          >
            Course Content
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-6 mt-3">
            6 Complete Modules, Step by Step
          </h2>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Over <span 
              className="font-bold"
              style={{ color: 'var(--color-primary)' }}
            >22 hours of video content</span>, downloadable templates, and practical exercises to master every strategy.
          </p>
        </div>

        {/* Módulos */}
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-[var(--color-bg)] rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-200 group"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={module.image}
                  alt={module.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div 
                  className="absolute top-4 left-4 text-white px-4 py-2 rounded-full font-bold text-sm"
                  style={{ background: 'var(--color-primary)' }}
                >
                  Module {index + 1}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">
                  {module.title}
                </h3>
                <p className="text-[var(--color-text-light)] text-lg leading-relaxed mb-4">
                  {module.description}
                </p>
                <div 
                  className="flex items-center font-semibold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                  {module.lessons}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div 
          className="mt-20 rounded-3xl p-12 text-white text-center"
          style={{
            background: `linear-gradient(to right, var(--gradient-from), var(--gradient-via), var(--gradient-to))`
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Exclusive Bonuses For Limited Time
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all">
              <h4 className="font-bold text-xl mb-3 text-white">Ebook: 100 Marketing Strategies</h4>
              <p className="text-white/80">Value: $47</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all">
              <h4 className="font-bold text-xl mb-3 text-white">Canva Pro Templates Pack</h4>
              <p className="text-white/80">Value: $67</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all">
              <h4 className="font-bold text-xl mb-3 text-white">1 Month of Group Mentorship</h4>
              <p className="text-white/80">Value: $197</p>
            </div>
          </div>
          <p className="mt-8 text-2xl font-bold">
            Total Bonus Value: <span className="line-through opacity-70">$311</span> → FREE TODAY!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features
