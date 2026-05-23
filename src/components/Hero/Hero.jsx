import { motion } from 'framer-motion'
import './Hero.css'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-wave" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={itemVariants} className="hero-kicker">
            Muhammad Mustufa 
          </motion.p>
          <motion.h1 variants={itemVariants} className="hero-title">
            Industrial Electronics Engineer
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-subtitle">
            Embedded Systems | IoT | Bare-Metal C
          </motion.p>
          <motion.div variants={itemVariants} className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <div className="hero-widgets">
          <div className="glass-panel widget-card">
            <h3>Technical Focus</h3>
            <ul className="widget-list">
              {[
                'Embedded Systems',
                'Industrial Automation',
                'IoT Systems',
                'PCB Design',
              ].map((item) => (
                <li key={item}>
                  <span className="pulse-dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel widget-card">
            <p className="widget-title">CURRENTLY LEARNING</p>
            <div className="widget-divider" />
            <p className="widget-line">Register-Level Embedded C (Bare-Metal)</p>
            <p className="widget-line">Module 2: AVR Microcontrollers</p>
            <div className="widget-status">
              <span className="status-label">STATUS:</span>
              <span className="status-active">
                <span className="status-dot" aria-hidden="true" />ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
