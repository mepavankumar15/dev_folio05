const Intro = () => {
  return (
    <section id="intro" className="section intro-section">
      <div className="container">
        <div className="intro-content">
          
          <h1>Hello, I'm <span className="highlight">Pavan Kumar K</span></h1>
          <p className="subtitle">Web Developer</p>
          <p className="intro-text">
            I build innovative solutions with expertise in Web3, AI/ML, and backend development.
            Currently enhancing my skills in distributed systems and blockchain technologies.
          </p>
          
          <div className="cta-buttons">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <ul>
                <li>TypeScript/JavaScript</li>
                <li>Golang</li>
                <li>Rust</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Frameworks</h4>
              <ul>
                <li>React/Next.js</li>
                <li>Node.js</li>
                <li>TensorFlow</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Technologies</h4>
              <ul>
                <li>Docker</li>
                <li>Redis</li>
                <li>Blockchain</li>
                <li>Web3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;