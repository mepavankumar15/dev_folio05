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
                  <a href="mailto:pavan@example.com">mepavankumar15@gmail.com</a>
                </li>
                <li>
                  <span>Location:</span> Hyderabad, India
                </li>
              </ul>
              
              <div className="social-links">
                <a href="https://github.com/mepavankumar15" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://twitter.com/mrpavankumar005" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
            
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      
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