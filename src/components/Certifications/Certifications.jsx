import { motion } from 'framer-motion'
import { certifications } from '../../data/certifications'
import './Certifications.css'

const sectionMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Certifications() {
  const cards = [...certifications]
  while (cards.length < 3) {
    cards.push(null)
  }

  return (
    <motion.section
      id="certifications"
      className="certifications-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionMotion}
    >
      <div className="container">
        <p className="section-title">CERTIFICATIONS</p>
        <h2 className="section-heading">Verified credentials</h2>
        <div className="cert-slider" role="region" aria-label="Certifications slider">
          <div className="cert-track">
            {cards.map((cert, index) =>
              cert ? (
                <article className="glass-panel cert-card" key={cert.name}>
                  <div
                    className="cert-logo"
                    style={{ background: cert.color }}
                    aria-hidden="true"
                  />
                  <h3>{cert.name}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-meta">
                    <span>{cert.date}</span>
                    <span className="cert-status">{cert.status}</span>
                  </div>
                  {cert.verifyUrl && (
                    <a
                      className="cert-verify"
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Verify this Cert
                    </a>
                  )}
                </article>
              ) : (
                <article className="glass-panel cert-card ghost" key={`ghost-${index}`}>
                  <p>&nbsp;</p>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Certifications
