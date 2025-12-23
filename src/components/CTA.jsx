import './CTA.css'

const CTA = () => {
  const handleContactClick = () => {
    window.location.href = '#contact-form';
  };

  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Build Something Impactful?</h2>
          <p className="cta-text">
            Let's discuss how Sammunat can transform your business with custom technology solutions.
          </p>
          <button className="cta-button" onClick={handleContactClick}>
            Contact Us
          </button>
          <p className="cta-note">
            We'll get back to you within 24 hours to start our partnership.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA