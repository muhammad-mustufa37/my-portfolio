import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const sectionMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Contact() {
  const [sent, setSent] = useState(false)
  const recipientEmail = 'm.mustufakk@gmail.com'

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const fields = Object.fromEntries(formData)
    const subject = 'Portfolio contact and internship inquiry'
    const body = `Name: ${fields.name}\nEmail: ${fields.email}\n\nMessage:\n${fields.message}`
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setSent(true)
    event.target.reset()
  }

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionMotion}
    >
      <div className="container contact-content">
        <p className="section-title">LET'S CONNECT</p>
        <h2 className="section-heading">Ready for internships and collaboration</h2>
        <p className="section-subtitle">
          Open to internship opportunities, collaboration, and engineering
          conversations.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span className="visually-hidden">Name</span>
            <input name="name" type="text" placeholder="Name" required />
          </label>
          <label>
            <span className="visually-hidden">Email</span>
            <input name="email" type="email" placeholder="Email" required />
          </label>
          <label>
            <span className="visually-hidden">Message</span>
            <textarea name="message" rows="4" placeholder="Message" required />
          </label>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
          {sent && <p className="form-status">Message sent. Thank you.</p>}
        </form>
        <div className="contact-social">
          <a href="https://github.com/muhammad-mustufa37" target="_blank" rel="noreferrer">
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.38 6.84 9.74.5.1.68-.22.68-.48l-.01-1.7c-2.78.62-3.37-1.38-3.37-1.38-.45-1.17-1.1-1.49-1.1-1.49-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.6 2.36 1.14 2.94.87.09-.67.35-1.14.64-1.4-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.06 1.03-2.78-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06.8-.23 1.66-.35 2.51-.35.85 0 1.71.12 2.51.35 1.91-1.34 2.75-1.06 2.75-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.65 1.03 2.78 0 3.96-2.34 4.83-4.57 5.08.36.32.68.95.68 1.92l-.01 2.85c0 .27.18.58.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
                />
              </svg>
            </span>
            GitHub @muhammad-mustufa37
          </a>
          <a href="https://linkedin.com/in/Muhammad-Mustufa-kk" target="_blank" rel="noreferrer">
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  fill="currentColor"
                  d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5C0 2.12 1.08 1 2.5 1S4.98 2.12 4.98 3.5zM0.5 23.5h4V7.5h-4v16zM8 7.5h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.6 4.75 6v7.5h-4v-6.6c0-1.6-.03-3.6-2.2-3.6-2.2 0-2.55 1.7-2.55 3.5v6.7H8v-16z"
                />
              </svg>
            </span>
            LinkedIn /in/muhammad-mustufa-kk
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
