import { 
  SiTypescript, SiJavascript, SiGo, SiRust, SiPython,
  SiReact, SiNextdotjs, SiNodedotjs, SiTensorflow,
  SiDocker, SiRedis, SiBlockchaindotcom, SiEthereum
} from 'react-icons/si';

const Intro = () => {
  return (
    <section id="intro" className="section intro-section">
      <div className="container">
        <div className="intro-content">
          {/* Profile picture container */}
          <div className="profile-pic-container">
            <img 
              src="/pavan-pic.jpg" 
              alt="Pavan Kumar K" 
              className="profile-pic"
            />
          </div>
          
          <h1>Hello, I'm <span className="highlight">Pavan Kumar K</span></h1>
          <p className="subtitle">Web Developer</p>
          <p className="intro-text">
            I build innovative solutions with expertise in Web3, AI/ML, and backend development.
            Currently enhancing my skills in distributed systems and blockchain technologies.
          </p>
          
          <div className="cta-buttons"> 
              <a
              href="https://drive.google.com/file/d/1uJcYVIpcMFCqP7Ms7BMdhrHzPnpJb6il/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Resume
            </a>

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
                <li>
                  TypeScript/JavaScript
                  <div className="skill-icons">
                    <SiTypescript className="skill-icon" />
                    <SiJavascript className="skill-icon" />
                  </div>
                </li>
                <li>
                  Golang
                  <div className="skill-icons">
                    <SiGo className="skill-icon" />
                  </div>
                </li>
                <li>
                  Rust
                  <div className="skill-icons">
                    <SiRust className="skill-icon" />
                  </div>
                </li>
                <li>
                  Python
                  <div className="skill-icons">
                    <SiPython className="skill-icon" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Frameworks</h4>
              <ul>
                <li>
                  React/Next.js
                  <div className="skill-icons">
                    <SiReact className="skill-icon" />
                    <SiNextdotjs className="skill-icon" />
                  </div>
                </li>
                <li>
                  Node.js
                  <div className="skill-icons">
                    <SiNodedotjs className="skill-icon" />
                  </div>
                </li>
                <li>
                  TensorFlow
                  <div className="skill-icons">
                    <SiTensorflow className="skill-icon" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Technologies</h4>
              <ul>
                <li>
                  Docker
                  <div className="skill-icons">
                    <SiDocker className="skill-icon" />
                  </div>
                </li>
                <li>
                  Redis
                  <div className="skill-icons">
                    <SiRedis className="skill-icon" />
                  </div>
                </li>
                <li>
                  Blockchain
                  <div className="skill-icons">
                    <SiBlockchaindotcom className="skill-icon" />
                  </div>
                </li>
                <li>
                  Web3
                  <div className="skill-icons">
                    <SiEthereum className="skill-icon" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;