import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import './FeaturedProject.css'

const sectionMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const featuredProjects = projects.filter((project) => project.featured)

function FeaturedProject() {
  const [activeIndexes, setActiveIndexes] = useState(() =>
    Object.fromEntries(featuredProjects.map((project) => [project.id, 0])),
  )
  const sliderRef = useRef(null)

  if (!featuredProjects.length) {
    return null
  }

  const handleSlide = (direction) => {
    const slider = sliderRef.current
    if (!slider) {
      return
    }

    const width = slider.clientWidth
    slider.scrollBy({ left: direction * width, behavior: 'smooth' })
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
        <div className="featured-controls">
          <button
            className="carousel-btn"
            type="button"
            onClick={() => handleSlide(-1)}
            aria-label="Previous project"
          >
            Prev
          </button>
          <button
            className="carousel-btn"
            type="button"
            onClick={() => handleSlide(1)}
            aria-label="Next project"
          >
            Next
          </button>
        </div>
        <div
          className="featured-slider"
          role="region"
          aria-label="Featured projects slider"
          ref={sliderRef}
        >
          <div className="featured-track">
            {featuredProjects.map((project) => {
              const gallery = project.images?.length
                ? project.images
                : project.image
                  ? [project.image]
                  : []
              const activeIndex = activeIndexes[project.id] ?? 0

              return (
                <motion.div
                  className="glass-panel featured-card"
                  whileHover={{ y: -4 }}
                  key={project.id}
                >
                  <div className="project-media">
                    {gallery.length ? (
                      <>
                        <img src={gallery[activeIndex]} alt={project.title} />
                        {gallery.length > 1 && (
                          <div className="project-carousel-controls">
                            <button
                              className="carousel-btn"
                              type="button"
                              onClick={() =>
                                setActiveIndexes((prev) => ({
                                  ...prev,
                                  [project.id]:
                                    activeIndex === 0
                                      ? gallery.length - 1
                                      : activeIndex - 1,
                                }))
                              }
                              aria-label="Previous project image"
                            >
                              Prev
                            </button>
                            <div className="carousel-dots" role="tablist">
                              {gallery.map((_, index) => (
                                <button
                                  key={`dot-${project.id}-${index}`}
                                  className={`carousel-dot ${
                                    index === activeIndex ? 'active' : ''
                                  }`}
                                  type="button"
                                  onClick={() =>
                                    setActiveIndexes((prev) => ({
                                      ...prev,
                                      [project.id]: index,
                                    }))
                                  }
                                  aria-label={`View image ${index + 1}`}
                                />
                              ))}
                            </div>
                            <button
                              className="carousel-btn"
                              type="button"
                              onClick={() =>
                                setActiveIndexes((prev) => ({
                                  ...prev,
                                  [project.id]:
                                    activeIndex === gallery.length - 1
                                      ? 0
                                      : activeIndex + 1,
                                }))
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
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.technologies.map((tech) => (
                        <span className="tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-actions">
                      {project.github && (
                        <a
                          className="btn btn-secondary"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                      <span className="status-badge">{project.status}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default FeaturedProject
