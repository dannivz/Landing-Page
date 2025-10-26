import { useState, useEffect } from 'react' // ✅ AGREGADO useState
import { motion } from 'framer-motion'

// Wrapper para animar secciones
export function AnimatedSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

// Animación de contador (para números)
export function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let start = 0
    const end = parseInt(value)
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration * 60))
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [value, duration])
  
  return <span>{count.toLocaleString()}</span>
}