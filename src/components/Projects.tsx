interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveDemoLink?: string;
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Movie Recommendation Engine',
      description: 'AI-powered recommendation system that suggests movies based on user search history and preferences.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Machine Learning'],
      githubLink: 'https://github.com/mepavankumar15/avyu_movies.git',
      image: '/images/movie-recommendation.jpg'
    },
    {
      id: 2,
      title: 'Redis Clone with Golang',
      description: 'High-performance in-memory database clone implementing core Redis features using Golang.',
      technologies: ['Golang', 'Distributed Systems', 'Networking'],
      githubLink: 'https://github.com/mepavankumar15/golangDis.git',
      image: '/images/redis-clone.jpg'
    },
    {
      id: 3,
      title: 'Blockchain Implementation',
      description: 'Proof-of-concept blockchain with cryptographic hashing and basic consensus mechanism.',
      technologies: ['Golang', 'Blockchain', 'SHA-256'],
      githubLink: 'https://github.com/mepavankumar15/simple_blockchain_go.git',
      image: '/images/blockchain.jpg'
    },
    {
      id: 4,
      title: 'Artist Style GPT',
      description: 'Generative AI model that produces artwork in the style of specific artists using deep learning.',
      technologies: ['TensorFlow', 'Python', 'Keras', 'Neural Networks'],
      githubLink: 'https://github.com/mepavankumar15/chatgpt_avyu.git',
      image: '/images/ai-art.jpg'
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Selected works showcasing my technical expertise</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      View Code
                    </a>
                  )}
                  {project.liveDemoLink && (
                    <a 
                      href={project.liveDemoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;