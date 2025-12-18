import { useEffect, useState } from 'react';
import { FiArrowRight, FiCheckCircle, FiClock, FiShield, FiStar, FiUsers, FiZap, FiAlertTriangle, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';
import FAQ from '../../components/FAQ';

const VariationD = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
  const [spotsLeft, setSpotsLeft] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const cards = [
    { type: 'urgency', icon: <FiAlertTriangle />, title: 'Only 7 spots left', subtitle: 'This month', color: 'red', urgent: true },
    { type: 'benefit', icon: <FiClock />, title: 'Save 10+ Hours', subtitle: 'Every week', color: 'orange', stat: '10+ hrs/week' },
    { type: 'trust', icon: <FiUsers />, title: '5,000+ Businesses', subtitle: 'Trust us', color: 'blue', stat: '5,000+' },
    { type: 'benefit', icon: <FiShield />, title: 'Zero Risk', subtitle: '99.9% compliance', color: 'green', stat: '99.9%' },
    { type: 'benefit', icon: <FiZap />, title: '48-Hour Close', subtitle: 'Fast reporting', color: 'purple', stat: '48h' },
    { type: 'trust', icon: <FiStar />, title: '4.9/5 Rating', subtitle: '127 reviews', color: 'yellow', stat: '4.9/5' },
  ];

  const pricing = [
    { name: 'Starter', price: 'AED 299', period: '/mo', desc: 'Up to 50 transactions/month', items: ['Corporate tax filing', 'VAT registration & filing', 'Quarterly statements', 'Dedicated manager'] },
    { name: 'Essential', price: 'AED 560', period: '/mo', desc: 'Up to 200 transactions/month', popular: true, items: ['Everything in Starter', 'Monthly reconciliation', 'Quarterly reporting', 'Priority support', 'Expense categorization'] },
    { name: 'Growth', price: 'AED 800', period: '/mo', desc: 'Up to 2,000 transactions/month', items: ['Everything in Essential', 'Cash flow analysis', 'Budget vs actuals', 'Multi-currency', 'Dedicated account manager'] },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="modern-landing variation-d">
      <section className="hero-masonry">
        <div className="masonry-container">
          <div className="masonry-grid">
            {cards.map((card, idx) => (
              <div key={idx} className={`masonry-card masonry-${card.color} ${card.urgent ? 'masonry-urgent' : ''}`} data-animate>
                {card.urgent && (
                  <div className="urgent-badge-masonry">
                    <FiAlertTriangle />
                    <span>URGENT</span>
                  </div>
                )}
                <div className="masonry-icon">{card.icon}</div>
                {card.stat && <div className="masonry-stat">{card.stat}</div>}
                <h3 className="masonry-title">{card.title}</h3>
                <p className="masonry-subtitle">{card.subtitle}</p>
              </div>
            ))}
            <div className="masonry-card masonry-form" data-animate>
              <div className="form-masonry">
                <h3 className="form-title-masonry">Claim Free Month</h3>
                <p className="form-subtitle-masonry">Only {spotsLeft} spots left</p>
                <form className="modern-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Name *" required className="modern-input" />
                  <input type="email" placeholder="Email *" required className="modern-input" />
                  <input type="tel" placeholder="Phone *" required className="modern-input" />
                  <button type="submit" className="btn-primary-modern btn-full btn-urgent">
                    Claim Now
                    <FiArrowRight className="btn-icon" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="hero-content-masonry" data-animate>
            <h1 className="hero-title-masonry">
              Get investor-ready books in <span className="gradient-text">48 hours</span>
              <br />
              <span className="gradient-text">First month FREE</span> — Offer ends in {timeLeft.hours}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </h1>
            <p className="hero-description-masonry">
              Join 5,000+ UAE businesses. Automated bookkeeping, tax compliance, real-time dashboards. 
              <strong> Limited spots. First month free. No commitment.</strong>
            </p>
            <div className="hero-actions-masonry">
              <a href="mailto:hello@finanshels.com" className="btn-primary-modern btn-urgent btn-large">
                Claim Free Month Now
                <FiArrowRight className="btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="urgency-banner-masonry">
        <div className="section-container">
          <div className="urgency-alert-masonry" data-animate>
            <FiAlertTriangle />
            <div>
              <h3>Don't Miss Out</h3>
              <p>Only {spotsLeft} spots available this month. First month free offer ends in {timeLeft.hours}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</p>
            </div>
            <a href="mailto:hello@finanshels.com" className="btn-primary-modern btn-urgent">
              Claim Your Spot
              <FiArrowRight className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="pricing-section-modern" id="pricing">
        <div className="section-container">
          <div className="section-header" data-animate>
            <h2 className="section-title">Simple Pricing — First Month Free</h2>
            <p className="section-description">Limited time offer. No hidden fees. Cancel anytime.</p>
          </div>
          <div className="pricing-grid-modern">
            {pricing.map((plan, idx) => (
              <div key={plan.name} className={`pricing-card-modern ${plan.popular ? 'pricing-featured' : ''}`} data-animate>
                {plan.popular && <div className="popular-badge-modern">Most Popular</div>}
                <div className="free-badge">First Month FREE</div>
                <h3 className="plan-name-modern">{plan.name}</h3>
                <div className="plan-price-modern">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <p className="plan-desc-modern">{plan.desc}</p>
                <ul className="features-list-modern">
                  {plan.items.map((item) => (
                    <li key={item} className="feature-item-modern">
                      <FiCheckCircle className="feature-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="mailto:hello@finanshels.com" className={`btn-pricing-modern ${plan.popular ? 'btn-pricing-featured' : ''}`}>
                  Claim Free Month
                  <FiArrowRight className="btn-icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-container">
        <FAQ />
      </div>

      <section className="cta-section-modern cta-urgent">
        <div className="cta-container-modern">
          <div className="urgency-countdown">
            <FiClock />
            <span>Offer ends in: {timeLeft.hours}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
          <h3 className="cta-title-modern">Only {spotsLeft} spots left this month</h3>
          <p className="cta-description-modern">Get investor-ready books in 48 hours. First month 100% free. No commitment.</p>
          <div className="cta-actions-modern">
            <a href="mailto:hello@finanshels.com" className="btn-primary-modern btn-large btn-urgent">
              Claim Your Free Month Now
              <FiArrowRight className="btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VariationD;
