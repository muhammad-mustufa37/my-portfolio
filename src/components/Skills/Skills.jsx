import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import './Skills.css'

const sectionMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionMotion}
    >
      <div className="container">
        <p className="section-title">SKILLS</p>
        <h2 className="section-heading">Core competencies</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="glass-panel skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
