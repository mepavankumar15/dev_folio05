

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Education</h2>
          <p className="section-subtitle">My academic journey and qualifications</p>
        </div>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Aditya University</h4>
            <ul>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>2022 - 2026</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h4>Sri Chaitanya Junior College</h4>
            <ul>
              <li> MPC </li>
              <li>2020 - 2022</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Gitam High School </h4>
            <ul>
              <li>High School Education</li>
              <li>2015 - 2020</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;