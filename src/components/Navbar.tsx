import { useState, useEffect } from 'react'
import { FiGithub, FiTwitter, FiUser, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('intro')
  const [darkMode, setDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <button 
            className="mobile-menu-button md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          
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
                onClick={() => scrollToSection('education')}
                className={activeSection === 'education' ? 'active' : ''}
              >
                Education
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
            <li>
              <button 
                onClick={() => scrollToSection('hobbies')}
                className={activeSection === 'hobbies' ? 'active' : ''}
              >
                Hobbies
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

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <div className="mobile-menu-content">
            <button 
              onClick={() => scrollToSection('intro')}
              className={`mobile-menu-link ${activeSection === 'intro' ? 'active' : ''}`}
            >
              <FiUser className="nav-icon" />
              <span>About</span>
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className={`mobile-menu-link ${activeSection === 'education' ? 'active' : ''}`}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`mobile-menu-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('blogs')}
              className={`mobile-menu-link ${activeSection === 'blogs' ? 'active' : ''}`}
            >
              Blogs
            </button>
            <button 
              onClick={() => scrollToSection('hobbies')}
              className={`mobile-menu-link ${activeSection === 'hobbies' ? 'active' : ''}`}
            >
              Hobbies
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar