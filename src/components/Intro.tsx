import { 
  SiTypescript, SiJavascript, SiGo, SiRust, SiPython,
  SiReact, SiNextdotjs, SiNodedotjs, SiTensorflow,
  SiDocker, SiRedis, SiBlockchaindotcom, SiEthereum , SiMongodb, 
  SiMysql , SiPostgresql , SiTailwindcss
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
          <p className="subtitle"> Web3 | AI Developer</p>
          <p className="intro-text">
            I build innovative solutions with expertise in Web3, AI/ML, and web development.
            Currently enhancing my skills in AI and blockchain technologies.
          </p>
          
          <div className="cta-buttons"> 
            <a
              href="https://drive.google.com/file/d/1ceua-2EiTTJ2uhWwQMaCMwoim5czeWlL/view?usp=drive_link" 
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
          <div className="skills-scroll-container">
            <div className="skills-scroll">
              {/* Languages */}
              <SiTypescript className="skill-icon" title="TypeScript" />
              <SiJavascript className="skill-icon" title="JavaScript" />
              <SiGo className="skill-icon" title="Golang" />
              <SiRust className="skill-icon" title="Rust" />
              <SiPython className="skill-icon" title="Python" />
              
              {/* Frameworks */}
              <SiReact className="skill-icon" title="React" />
              <SiNextdotjs className="skill-icon" title="Next.js" />
              <SiNodedotjs className="skill-icon" title="Node.js" />
              <SiTensorflow className="skill-icon" title="TensorFlow" />
              
              {/* Technologies */}
              <SiDocker className="skill-icon" title="Docker" />
              <SiRedis className="skill-icon" title="Redis" />
              <SiBlockchaindotcom className="skill-icon" title="Blockchain" />
              <SiEthereum className="skill-icon" title="Ethereum" />
              <SiMongodb className="skill-icon" title="Mongodb" />
              <SiMysql className="skill-icon" title="MySQL" />
              <SiTailwindcss className="skill-icon" title="tailwindcss" />
              <SiPostgresql className='skill-icon' title='postgresql' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
