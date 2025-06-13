const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Education</h2>
          <p className="section-subtitle">Academic journey and qualifications</p>
        </div>
        
        <div className="education-container">
          <div className="education-card">
            <div className="education-header">
              <div className="education-icon">AI</div>
              <div>
                <h3>Aditya University</h3>
                <span className="education-year">2022 - 2026</span>
              </div>
            </div>
            <p className="education-degree">Artificial Intelligence and Machine Learning</p>
          </div>
          
          <div className="education-card">
            <div className="education-header">
              <div className="education-icon">MPC</div>
              <div>
                <h3>Sri Chaitanya Junior College</h3>
                <span className="education-year">2020 - 2022</span>
              </div>
            </div>
            <p className="education-degree">Mathematics, Physics, Chemistry</p>
          </div>
          
          <div className="education-card">
            <div className="education-header">
              <div className="education-icon">HS</div>
              <div>
                <h3>Gitam High School</h3>
                <span className="education-year">2015 - 2020</span>
              </div>
            </div>
            <p className="education-degree">High School Education</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;