import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <section id="about" className="hero">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-title"
      >
        Hi, I'm <span className="hero-title-accent">Aleksandr</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="hero-description"
      >
        Frontend Developer. I build fast, clean and user‑friendly web applications.
      </motion.p>
    </section>
  )
}

