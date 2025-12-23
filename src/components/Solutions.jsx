import './Solutions.css'

const Solutions = () => {
  const solutions = [
    {
      title: 'Professional Video Editing',
      description: 'Elevate your content with professional video editing that captivates and engages your audience. Experience the future of storytelling with our expert services.',
      cta: 'Start Creating',
      icon: '🎬'
    },
    {
      title: 'Custom CRM & ERP Solutions',
      description: 'Empower your business with scalable, efficient, and fully customized systems designed to match your exact needs. Discover the competitive edge with technology built around you.',
      cta: 'Explore Solutions',
      icon: '⚙️'
    },
    {
      title: 'Expert Web Development',
      description: 'Build powerful digital experiences with websites that are visually stunning, fast, secure, and user-friendly. Experience the future of innovation with cutting-edge technologies.',
      cta: 'Build with Us',
      icon: '💻'
    }
  ];

  return (
    <section id="solutions" className="solutions">
      <div className="container">
        <h2 className="section-title">Our Solutions</h2>
        <p className="solutions-intro">
          We make your spending stress-free for you to have the perfect control. 
          We provide seamless, high-quality services that eliminate the hassle of project management.
        </p>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <button className="solution-button">{solution.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions