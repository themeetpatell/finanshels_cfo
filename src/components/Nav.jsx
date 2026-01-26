import { useEffect, useState } from 'react';
import finanshelsLogo from '../assets/finanshelslogo.svg';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav-modern ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container-modern">
        <a href="/" className="nav-logo-modern">
          <img
            src={finanshelsLogo}
            alt="Finanshels"
            className="nav-logo-img"
            height="32"
            decoding="async"
            fetchpriority="high"
          />
        </a>
        
        <a
          href="#consultation"
          className="btn-nav-primary"
          onClick={(e) => {
            if (window.dataLayer) {
              window.dataLayer.push({
                event: 'nav_consultation_click',
                button_location: 'navigation',
                button_text: 'Get Free Consultation'
              });
            }

            const consultationSection = document.getElementById('consultation');
            if (consultationSection) {
              e.preventDefault();
              consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          Get Free Consultation
        </a>
      </div>
    </header>
  );
};

export default Nav;
