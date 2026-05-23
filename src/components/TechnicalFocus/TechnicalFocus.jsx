import { motion } from 'framer-motion'
import './TechnicalFocus.css'

const focusAreas = [
  {
    icon: '⚙',
    title: 'Embedded Systems',
    description:
      'Register-level programming, microcontroller architecture, bare-metal C',
  },
  {
    icon: '🏭',
    title: 'Industrial Automation',
    description: 'Control systems, PLCs, process logic',
  },
  {
    icon: '📡',
    title: 'IoT Systems',
    description: 'ESP32, MQTT, sensor integration, networking',
  },
  {
    icon: '🔌',
    title: 'Electronics',
    description: 'Circuit analysis, BJTs, analog fundamentals',
  },
]

const sectionMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function TechnicalFocus() {
  return (
    <motion.section
      id="focus"
      className="focus-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionMotion}
    >
      <div className="container">
        <p className="section-title">TECHNICAL FOCUS</p>
        <h2 className="section-heading">Core engineering interests</h2>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <div className="glass-panel focus-card" key={area.title}>
              <div className="focus-icon" aria-hidden="true">
                {area.icon}
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default TechnicalFocus
