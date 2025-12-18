import { FiArrowUpRight } from 'react-icons/fi';

const CTA = ({ title, subtitle, primary }) => (
  <section className="section cta">
    <div>
      <div className="pill">Next step</div>
      <h2>{title}</h2>
      <p className="muted">{subtitle}</p>
    </div>
    <div className="cta-actions">
      <a className="primary-btn" href="mailto:hello@finanshels.com">
        {primary} <FiArrowUpRight />
      </a>
      <a className="ghost-btn" href="https://wa.me/971504871229" target="_blank" rel="noreferrer">
        Chat on WhatsApp
      </a>
    </div>
  </section>
);

export default CTA;
