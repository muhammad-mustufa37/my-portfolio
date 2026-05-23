import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import './FeaturedProject.css'

const sectionMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function FeaturedProject() {
  const featured = projects.find((project) => project.featured)
  const gallery = featured?.images?.length
    ? featured.images
    : featured?.image
      ? [featured.image]
      : []
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (activeIndex >= gallery.length) {
      setActiveIndex(0)
    }
  }, [activeIndex, gallery.length])

  if (!featured) {
    return null
  }

  return (
    <motion.section
      id="projects"
      className="featured-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionMotion}
    >
      <div className="container">
        <p className="section-title">FEATURED PROJECT</p>
        <h2 className="section-heading">Current build focus</h2>
        <motion.div className="glass-panel featured-card" whileHover={{ y: -4 }}>
          <div className="project-media">
            {gallery.length ? (
              <>
                <img src={gallery[activeIndex]} alt={featured.title} />
                {gallery.length > 1 && (
                  <div className="project-carousel-controls">
                    <button
                      className="carousel-btn"
                      type="button"
                      onClick={() =>
                        setActiveIndex((index) =>
                          index === 0 ? gallery.length - 1 : index - 1,
                        )
                      }
                      aria-label="Previous project image"
                    >
                      Prev
                    </button>
                    <div className="carousel-dots" role="tablist">
                      {gallery.map((_, index) => (
                        <button
                          key={`dot-${index}`}
                          className={`carousel-dot ${
                            index === activeIndex ? 'active' : ''
                          }`}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          aria-label={`View image ${index + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      className="carousel-btn"
                      type="button"
                      onClick={() =>
                        setActiveIndex((index) =>
                          index === gallery.length - 1 ? 0 : index + 1,
                        )
                      }
                      aria-label="Next project image"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="project-placeholder" aria-label="Project preview">
                <span>Project Preview Coming Soon</span>
              </div>
            )}
          </div>
          <div className="project-content">
            <p className="project-category">{featured.category}</p>
            <h3>{featured.title}</h3>
            <p className="project-description">{featured.description}</p>
            <div className="project-tags">
              {featured.technologies.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-actions">
              <a
                className="btn btn-secondary"
                href={featured.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <span className="status-badge">{featured.status}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FeaturedProject
