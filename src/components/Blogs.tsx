interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  image?: string;
}

const Blogs = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with SQL',
      excerpt: 'Comprehensive guide to SQL fundamentals for effective data management and query optimization.',
      date: 'Mar 8, 2025',
      readTime: '15 min read',
      link: 'https://medium.com/@avyu_15/certainly-heres-an-enhanced-version-of-the-article-with-additional-insights-and-details-f20071b1faf8',
      image: '/images/sql-article.jpg'
    },
    {
      id: 2,
      title: 'DSA Fundamentals',
      excerpt: 'Essential concepts of Data Structures and Algorithms every developer should master.',
      date: 'Feb 16, 2025',
      readTime: '5 min read',
      link: 'https://medium.com/@avyu_15/understanding-the-fundamentals-of-data-structures-and-algorithms-dsa-40409ffdab35',
      image: '/images/dsa-article.jpg'
    }
  ];

  return (
    <section id="blogs" className="section blogs-section">
      <div className="container">
        <div className="section-header">
          <h2>Latest Articles</h2>
          <p className="section-subtitle">Sharing knowledge and insights</p>
        </div>
        
        <div className="blog-list">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              
              <div className="blog-content">
                <h3>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="date">{post.date}</span>
                  <span className="divider">•</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read Article →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;