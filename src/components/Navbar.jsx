import { useState, useEffect, useRef } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        hamburgerRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id) => {
    let element = document.getElementById(id);
    
    if (!element) {
      if (id === 'contact') {
        element = document.getElementById('cta');
      }
    }
    
    if (!element) {
      return;
    }

    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Features', id: 'features' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`navbar ${hasScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          Sammunat
        </div>
        
        <div className="mobile-nav-wrapper">
          <ul 
            ref={menuRef}
            className={`navbar-menu ${isMenuOpen ? 'mobile-open' : ''}`}
          >
            {navItems.map((item) => (
              <li 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-item"
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div 
            ref={hamburgerRef}
            className={`navbar-hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar