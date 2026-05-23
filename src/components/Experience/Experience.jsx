import { motion } from 'framer-motion'
import { timeline } from '../../data/experience'
import './Experience.css'

const sectionMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionMotion}
    >
      <div className="container">
        <p className="section-title">LEARNING JOURNEY</p>
        <h2 className="section-heading">Progress timeline</h2>
        <div className="timeline">
          {timeline.map((entry) => (
            <article className="timeline-item" key={entry.title}>
              <div
                className={`timeline-dot ${
                  entry.type === 'current' ? 'current' : ''
                }`}
                aria-hidden="true"
              />
              <div className="timeline-card glass-panel">
                <div className="timeline-header">
                  <span className="timeline-date">{entry.date}</span>
                  {entry.badge && (
                    <span className="timeline-badge">{entry.badge}</span>
                  )}
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
