import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/sammunat'
    },
    { 
      name: 'WhatsApp', 
      url: 'https://whatsapp.com/channel/0029VbAgR4SFMqrhDNF3l11T'
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/sammunat_llc'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo-section">
              <div className="footer-logo">Sammunat</div>
              <p className="footer-tagline">
                Crafting project-specific solutions with expertise.
              </p>
            </div>
            
            <div className="footer-contact">
              <h3>Contact Information</h3>
              <div className="contact-details">
                <p className="contact-address">
                  <strong>Address:</strong><br />
                  127 N Higgins Ave Ste 307d<br />
                  Missoula, MT 59802, USA
                </p>
                <p className="contact-email">
                  <strong>Email:</strong> contact@sammunat.com
                </p>
                <p className="contact-phone">
                  <strong>Phone:</strong> +971 588749689
                </p>
              </div>
            </div>
            
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              © {new Date().getFullYear()} Sammunat. All rights reserved.
            </div>
            <div className="footer-links">
              <a href="https://sammunat.com/" target="_blank" rel="noopener noreferrer">
                Visit Main Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer