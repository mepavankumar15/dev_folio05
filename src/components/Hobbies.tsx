const Hobbies = () => {
  return (
    <section id="hobbies" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Hobbies & Interests</h2>
          <p className="section-subtitle">Beyond the screen</p>
        </div>
        
        <div className="hobbies-container">
          <div className="hobbies-column">
            <h3 className="hobbies-title">Active</h3>
            <div className="hobbies-list">
              <div className="hobby-item">Podcasts</div>
              <div className="hobby-item">Vibe Coding</div>
              <div className="hobby-item">Twitter</div>
            </div>
          </div>
          
          <div className="hobbies-column">
            <h3 className="hobbies-title">Passive</h3>
            <div className="hobbies-list">
              <div className="hobby-item">Chess</div>
              <div className="hobby-item">Journal</div>
              <div className="hobby-item">Reading</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;