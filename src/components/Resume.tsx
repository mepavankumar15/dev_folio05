import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header">
          <h2>My Resume</h2>
          <p className="section-subtitle">Professional experience and skills overview</p>
        </div>
        
        <div className="resume-content">
          <div className="resume-preview">
            {/* Replace with your actual resume image or PDF viewer */}
            <img 
              src="/resume-preview.jpg" 
              alt="Resume Preview" 
              className="resume-image"
            />
          </div>
          
          <div className="resume-download">
            <a 
              href="/Resume_dudupe.pdf" 
              download="Pavan_Kumar_Resume.pdf"
              className="btn-primary"
            >
              <FiDownload style={{ marginRight: '8px' }} />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;