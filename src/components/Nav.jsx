import { useEffect, useRef, useState } from 'react';
import finanshelsLogo from '../assets/finanshelslogo.svg';
import ComplianceBanner from './ComplianceBanner';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The header is fixed, so page sections cannot rely on normal flow for their
  // top offset. Publish the real rendered height (nav row + compliance banner)
  // as --header-h and let the sections offset from it. Measured rather than
  // hardcoded because the banner's height changes with breakpoint and font
  // loading, and a stale magic number here overlaps the hero on small screens.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;

    const publishHeaderHeight = () => {
      document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`);
    };

    publishHeaderHeight();

    if (typeof ResizeObserver === 'undefined') {
      // Older browsers keep the CSS fallback value and re-measure on resize.
      window.addEventListener('resize', publishHeaderHeight);
      return () => window.removeEventListener('resize', publishHeaderHeight);
    }

    const observer = new ResizeObserver(publishHeaderHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={headerRef} className={`nav-modern ${isScrolled ? 'nav-scrolled' : ''}`}>
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

      <ComplianceBanner />
    </header>
  );
};

export default Nav;
