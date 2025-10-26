import { useState } from 'react'
import { CONFIG } from '../config/config'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Do I need prior marketing experience?",
      answer: "No, the course is designed for beginners. We start from scratch and progress step by step. If you already have experience, the advanced modules will take you to the next level."
    },
    {
      question: "How long do I have access to the content?",
      answer: "Lifetime access. Once you buy, the course is yours forever. Plus, you'll receive all future updates at no additional cost."
    },
    {
      question: "Does it work for my country/language?",
      answer: "Yes, the strategies work in any Spanish-speaking country. The course is 100% in English and the techniques are globally applicable."
    },
    {
      question: "How much time should I dedicate?",
      answer: "With 1-2 hours a day you can complete the course in 3-4 weeks. But since you have lifetime access, you can go at your own pace without pressure."
    },
    {
      question: "What if I don't like the course?",
      answer: `You have a full ${CONFIG.guarantee}-day guarantee. If for any reason you're not satisfied, we'll refund your money in full with no questions asked.`
    },
    {
      question: "Does the price include everything or are there additional payments?",
      answer: `The price of ${CONFIG.currency}${CONFIG.currentPrice} includes absolutely everything: the 6 modules, bonuses, community, certification, and updates. No hidden charges or monthly fees.`
    },
    {
      question: "When can I start?",
      answer: "Immediately! Once you complete your purchase, you get instant access to all content. You can start the first lesson in less than 2 minutes."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, upon completing all modules you receive a verifiable professional certificate that you can add to your LinkedIn and CV."
    },
    {
      question: "Is there support if I have questions?",
      answer: "Yes, you have access to our private community where we answer all questions. Plus, we have email support with response in less than 24 hours."
    },
    {
      question: "Can I see a sample of the content before buying?",
      answer: "Yes, we have free sample lessons. Send us a message and we'll give you access to 2 complete lessons so you can see the quality of the course."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-[var(--color-primary)] font-bold text-sm uppercase tracking-wide">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-6 mt-3">
            Have Questions? We've Got Answers
          </h2>
          <p className="text-xl text-[var(--color-text-light)]">
            Everything you need to know before making the best decision
          </p>
        </div>

        {/* Preguntas */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--color-bg)] rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-[var(--color-primary)] transition-all"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-[var(--color-text)] pr-8">{faq.question}</span>
                <span
                  className={`text-3xl text-[var(--color-primary)] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-[var(--color-text-light)] leading-relaxed text-lg">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final con degradado corporativo azul-morado */}
        <div
          className="mt-16 text-center rounded-2xl p-10 text-white transform hover:scale-105 transition-all"
          style={{
            background: "linear-gradient(to right, #1E40AF, #2563EB, #5B21B6)"
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Contact us directly and we'll help you decide if this course is for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${CONFIG.email}`}
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all inline-block"
            >
              Send Email
            </a>
            <a
              href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all inline-block"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
