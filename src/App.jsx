import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import TechnicalFocus from './components/TechnicalFocus/TechnicalFocus.jsx'
import FeaturedProject from './components/FeaturedProject/FeaturedProject.jsx'
import Skills from './components/Skills/Skills.jsx'
import AboutPreview from './components/AboutPreview/AboutPreview.jsx'
import Terminal from './components/Terminal/Terminal.jsx'
import Experience from './components/Experience/Experience.jsx'
import Certifications from './components/Certifications/Certifications.jsx'
import Blog from './components/Blog/Blog.jsx'
import BlogPost from './components/Blog/BlogPost.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function Home() {
  return (
    <main>
      <Hero />
      <TechnicalFocus />
      <FeaturedProject />
      <Skills />
      <AboutPreview />
      <Terminal />
      <Experience />
      <Certifications />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <a
          className="whatsapp-float"
          href="https://wa.me/923131233340"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" role="presentation" aria-hidden="true">
            <path
              fill="currentColor"
              d="M16.03 2.4c-7.55 0-13.7 6.02-13.7 13.43 0 2.37.65 4.69 1.88 6.72L2 29.6l7.34-2.25a13.9 13.9 0 0 0 6.7 1.7h.01c7.55 0 13.7-6.02 13.7-13.42 0-3.58-1.44-6.95-4.07-9.48A13.9 13.9 0 0 0 16.03 2.4zm7.98 19.03c-.33.9-1.88 1.73-2.6 1.84-.66.1-1.5.14-2.42-.14-.55-.18-1.26-.4-2.18-.79-3.84-1.6-6.35-5.5-6.54-5.75-.18-.25-1.55-2.05-1.55-3.9 0-1.85.98-2.76 1.33-3.14.34-.39.74-.49.99-.49.24 0 .5 0 .72.01.23.01.54-.08.84.64.33.79 1.11 2.73 1.21 2.93.1.2.17.43.03.68-.14.25-.21.41-.41.63-.2.22-.43.49-.62.66-.2.17-.4.36-.17.7.24.33 1.04 1.7 2.24 2.76 1.55 1.36 2.85 1.78 3.19 1.98.34.2.54.17.75-.1.21-.27.86-1 1.1-1.34.23-.34.48-.28.81-.17.33.1 2.08.97 2.44 1.15.36.17.6.26.69.4.1.13.1.78-.24 1.68z"
            />
          </svg>
        </a>
      </div>
    </BrowserRouter>
  )
}

export default App
