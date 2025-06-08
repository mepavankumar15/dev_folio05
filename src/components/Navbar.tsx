import { useState, useEffect } from 'react'
import { FiGithub, FiTwitter, FiUser, FiSun, FiMoon } from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('intro')
  const [darkMode, setDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialMode = savedMode ? JSON.parse(savedMode) : systemPrefersDark
    
    setDarkMode(initialMode)
    document.documentElement.classList.toggle('dark', initialMode)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    document.documentElement.classList.toggle('dark', newDarkMode)
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode))
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <ul className="navbar-links">
          <li>
            <button 
              onClick={() => scrollToSection('intro')}
              className={activeSection === 'intro' ? 'active' : ''}
            >
              <FiUser className="nav-icon" />
              <span>About</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('blogs')}
              className={activeSection === 'blogs' ? 'active' : ''}
            >
              Blogs
            </button>
          </li>
        </ul>
        
        <div className="social-icons">
          <a 
            href="https://github.com/mepavankumar15" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub className="social-icon" />
          </a>
          <a 
            href="https://twitter.com/mrpavankumar005" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FiTwitter className="social-icon" />
          </a>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar