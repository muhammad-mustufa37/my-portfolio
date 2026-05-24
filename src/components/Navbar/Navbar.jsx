import { useEffect, useState } from 'react'
import './Navbar.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'blog', label: 'Blog' },
]

function Navbar() {
  const [active, setActive] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = [...navItems.map((item) => item.id), 'contact']
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen)

    return () => {
      document.body.classList.remove('nav-open')
    }
  }, [isOpen])

  const handleNavClick = () => setIsOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a className="logo" href="#home" onClick={handleNavClick}>
          Muhammad Mustufa
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${active === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-link resume"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            href="#contact"
            className={`nav-link ${active === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-link resume"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={handleNavClick}
          >
            Resume
          </a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
