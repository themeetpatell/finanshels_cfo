import { FiMail } from 'react-icons/fi';
import finanshelsLogo from '../assets/finanshelslogo.svg';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-container-modern">
        <div className="footer-grid">
          <div className="footer-brand-modern">
            <div className="footer-logo-row">
              <img
                src={finanshelsLogo}
                alt="Finanshels"
                className="footer-logo"
                height="45"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="footer-tagline">Fractional CFO support, fundraising prep, and investor-grade reporting.</p>
            <div className="footer-contact-modern">
              <a href="mailto:contact@finanshels.com" className="footer-contact-item">
                <FiMail />
                <span>contact@finanshels.com</span>
              </a>
            </div>
          </div>

          <div className="footer-links-modern">
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <a href="#services" className="footer-link">Services</a>
              <a href="#reviews" className="footer-link">Reviews</a>
              <a
                href="#consultation"
                className="footer-link"
                onClick={(e) => {
                  if (window.dataLayer) {
                    window.dataLayer.push({
                      event: 'footer_consultation_click',
                      button_location: 'footer_links',
                      button_text: 'Book a Call'
                    });
                  }
                  const target = document.getElementById('consultation');
                  if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Book a Call
              </a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <a href="mailto:hello@finanshels.com" className="footer-link">Contact Us</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom-modern">
          <p>© {new Date().getFullYear()} Finanshels. Built for modern finance teams.</p>
          <p className="footer-tagline-small">Financial operations without the busywork.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
