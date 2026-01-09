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
          href="https://contact-finanshels.zohobookings.com/#/audit-consultation"
          className="btn-nav-primary"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (window.dataLayer) {
              window.dataLayer.push({
                event: 'nav_consultation_click',
                button_location: 'navigation',
                button_text: 'Get Free Consultation'
              });
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
