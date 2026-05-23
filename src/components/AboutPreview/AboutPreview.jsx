import { motion } from 'framer-motion'
import './AboutPreview.css'

const sectionMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function AboutPreview() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionMotion}
    >
      <div className="container about-grid">
        <div>
          <p className="section-title">ABOUT</p>
          <h2 className="section-heading">Building a strong embedded foundation</h2>
          <p className="about-text">
            I am a second-semester industrial electronics engineering student
            focused on embedded systems and IoT. My current goal is to master
            register-level C while building practical projects that connect
            hardware and networking.
          </p>
          <a className="about-link" href="#about">
            Read More -&gt;
          </a>
        </div>
        <div className="glass-panel profile-card">
          <p className="profile-title">ENGINEERING PROFILE</p>
          <div className="profile-divider" />
          <div className="profile-row">
            <span>Focus:</span>
            <span>Embedded + IoT</span>
          </div>
          <div className="profile-row">
            <span>Cert:</span>
            <span>CCNA</span>
          </div>
          <div className="profile-row">
            <span>Year:</span>
            <span>2nd Semester</span>
          </div>
          <div className="profile-row">
            <span>Status:</span>
            <span>Actively Learning</span>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutPreview
