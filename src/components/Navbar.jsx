import { useState, useEffect, useRef } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null); 
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
        setActiveItem(null); 
      }
    };

    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
    setActiveItem(null); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setActiveItem(null); 
    }
  };

  const handleItemClick = (id) => {
    setActiveItem(id); 
    setTimeout(() => {
      scrollToSection(id);
    }, 300); 
  };

  const handleItemTouchStart = (id) => {
    setActiveItem(id);
  };

  const handleItemTouchEnd = () => {
    setTimeout(() => setActiveItem(null), 150);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Features', id: 'features' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Contact', id: 'cta' }
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
                onClick={() => handleItemClick(item.id)}
                onTouchStart={() => handleItemTouchStart(item.id)}
                onTouchEnd={handleItemTouchEnd}
                onMouseEnter={() => window.innerWidth > 768 && setActiveItem(item.id)}
                onMouseLeave={() => window.innerWidth > 768 && setActiveItem(null)}
                className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
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