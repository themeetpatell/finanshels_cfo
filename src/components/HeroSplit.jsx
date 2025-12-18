import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

const HeroSplit = () => {
  const checklist = ['First month free', 'Dedicated finance pod', 'UAE tax compliant'];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section">
      <div className="hero-split">
        <div>
          <div className="eyebrow">Trusted by 5000+ UAE businesses</div>
          <h1 className="hero-title">
            Stop Stressing About <span className="accent-text">Bookkeeping</span>. Focus on Growing Your Business.
          </h1>
          <p className="lead">
            Expert accounting, UAE tax compliance, and real-time financial insights handled by your dedicated pod.
            Corporate tax, VAT filing, and monthly closes without the busywork.
          </p>
          <div className="pill-row">
            {checklist.map((item) => (
              <div className="pill ghost" key={item}>
                <FiCheckCircle /> {item}
              </div>
            ))}
          </div>
          <div className="actions">
            <a className="primary-btn" href="#pricing">
              View Pricing <FiArrowUpRight />
            </a>
            <a className="ghost-btn" href="mailto:hello@finanshels.com">
              Book Free Consultation
            </a>
          </div>
          <div className="trust-logos">
            <span className="muted">Trusted by teams on</span>
            <strong>Zoho</strong>
            <strong>Xero</strong>
            <strong>QuickBooks</strong>
            <strong>FreshBooks</strong>
          </div>
        </div>
        <div>
          <div className="hero-form">
            <h3>Get Your Free Consultation</h3>
            <p className="muted">Book a 30-minute call with finance experts. No obligation.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Your Name*</label>
                <input id="name" name="name" className="input" placeholder="Enter your name" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email Address*</label>
                <input id="email" name="email" type="email" className="input" placeholder="name@company.com" required />
              </div>
              <div className="form-row">
                <label htmlFor="phone">Phone Number*</label>
                <input id="phone" name="phone" className="input" placeholder="+971 50 000 0000" required />
              </div>
              <div className="form-row">
                <label htmlFor="company">Company Name</label>
                <input id="company" name="company" className="input" placeholder="Optional" />
              </div>
              <button className="primary-btn wide" type="submit">
                Claim Free Consultation
              </button>
              <div className="form-foot">We respond within 24h. Your information stays private.</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;
