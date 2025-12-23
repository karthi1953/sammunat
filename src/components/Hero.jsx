import './Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Crafting Project Specific Solutions with Expertise!
          </h1>
          <p className="hero-subtext">
            We're a creative company that focuses on establishing long-term partnership with customers.
          </p>
          <button 
            className="hero-button"
            onClick={() => scrollToSection('solutions')}
          >
            Explore Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero