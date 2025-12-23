import './Features.css'

const Features = () => {
  const features = [
    {
      title: 'Scalable Solutions',
      description: 'Build applications that grow with your business, from MVP to enterprise-level systems.'
    },
    {
      title: 'Modern Tech Stack',
      description: 'Leverage cutting-edge technologies and best practices for optimal performance.'
    },
    {
      title: 'Reliable Support',
      description: 'Get dedicated support and maintenance to ensure your solutions run smoothly.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Our Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {index + 1}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features