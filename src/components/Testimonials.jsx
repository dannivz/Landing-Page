function Testimonials() {
  const testimonials = [
    {
      name: "Laura Martinez",
      role: "Digital Marketing Freelancer",
      image: "https://i.pravatar.cc/150?img=1",
      text: "In just 2 months I went from $0 to generating $4,500 monthly working from home. This course completely changed my life. I recommend it 100%.",
      revenue: "+$4,500/month"
    },
    {
      name: "Carlos Ramirez",
      role: "Digital Agency Owner",
      image: "https://i.pravatar.cc/150?img=3",
      text: "I applied the strategies from module 3 and got 5 new clients in the first 3 weeks. The investment paid for itself 10 times over.",
      revenue: "5 clients in 3 weeks"
    },
    {
      name: "Ana Gomez",
      role: "E-commerce Owner",
      image: "https://i.pravatar.cc/150?img=5",
      text: "My sales increased 340% after implementing the techniques from this course. It was the best investment I made in my business this year.",
      revenue: "+340% in sales"
    },
    {
      name: "Miguel Torres",
      role: "Online Coach",
      image: "https://i.pravatar.cc/150?img=7",
      text: "I went from having 200 followers to 15,000 on Instagram and now I sell my courses every day. The strategies really work.",
      revenue: "15K new followers"
    },
    {
      name: "Sofia Perez",
      role: "Business Consultant",
      image: "https://i.pravatar.cc/150?img=9",
      text: "The content is incredibly practical. No boring theory. Everything is actionable and you see immediate results. 5 stars without a doubt.",
      revenue: "Immediate results"
    },
    {
      name: "Robert Silva",
      role: "Digital Entrepreneur",
      image: "https://i.pravatar.cc/150?img=12",
      text: "I've been in marketing for 3 years and still learned techniques I didn't know. The ROI was brutal. I recovered my investment in the first week.",
      revenue: "ROI in 1 week"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[var(--color-primary)] font-bold text-sm uppercase tracking-wide">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 mt-3">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from people who applied the complete system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-[var(--color-primary)]/30"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.revenue}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof adicional */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-4">
            Average rating of <span className="font-bold text-[var(--color-primary)]">4.9/5</span> based on over 1,200 verified reviews
          </p>
          <div className="flex justify-center items-center gap-2 text-yellow-400 text-3xl">
            ★★★★★
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials