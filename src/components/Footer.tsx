const Footer = () => {
  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p className="section-subtitle">Let's collaborate on something amazing</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <ul>
                <li>
                  <span>Email:</span> 
                  <a href="mailto:mepavankumar15@gmail.com">mepavankumar15@gmail.com</a>
                </li>
                <li>
                  <span>Location:</span> Hyderabad, India
                </li>
              </ul>
              
              <div className="social-links">
                <a href="https://www.linkedin.com/in/pavan-kumar-kuchibhotla-3a34a8258/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                </div>
              </div>
            </div>
            </div>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} K Pavan Kumar. All rights reserved.</p>
            <div className="footer-links">
              <a href="#intro">About</a>
              <a href="#projects">Projects</a>
              <a href="#blogs">Blogs</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
