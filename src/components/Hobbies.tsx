

const Hobbies = () => {
  return (
    <section id="hobbies" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Hobbies & Interests</h2>
          <p className="section-subtitle">What I enjoy outside of work</p>
        </div>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Active</h4>
            <ul>
              <li>Watching Podcasts</li>
              <li>Vibe Coding</li>
              <li>Twitter</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h4>Passive</h4>
            <ul>
              <li>Chess</li>
              <li>journal</li>
              <li>Reading</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;