import { useEffect } from 'react';
import { FiArrowRight, FiCheckCircle, FiShield, FiStar, FiUsers, FiAward, FiZap, FiBarChart2, FiClock, FiTrendingUp } from 'react-icons/fi';
import FAQ from '../../components/FAQ';

const VariationE = () => {
  const trustMetrics = [
    { icon: <FiUsers />, value: '5,000+', label: 'UAE Businesses' },
    { icon: <FiStar />, value: '4.9/5', label: 'Average Rating' },
    { icon: <FiAward />, value: '99.9%', label: 'Compliance Rate' },
    { icon: <FiShield />, value: '100%', label: 'Data Secure' },
  ];

  const coreFeatures = [
    { icon: <FiBarChart2 />, title: 'Automated Bookkeeping', description: 'AI-powered reconciliation with human QA for investor-grade accuracy' },
    { icon: <FiShield />, title: 'Tax Compliance', description: 'UAE Corporate Tax & VAT handled on schedule. Never miss a deadline' },
    { icon: <FiZap />, title: '48-Hour Close', description: 'Real-time dashboards and fast reporting cycles for daily decision-making' },
    { icon: <FiUsers />, title: 'Dedicated Pod', description: 'Your finance team that knows your business, stack, and local compliance' },
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
    <div className="modern-landing variation-e">
      <section className="hero-editorial">
        <div className="editorial-container">
          <div className="editorial-header" data-animate>
            <div className="editorial-meta">
              <span className="editorial-date">2025</span>
              <span className="editorial-category">Bookkeeping Services</span>
            </div>
            <h1 className="editorial-title">
              Professional bookkeeping for <span className="gradient-text">modern UAE businesses</span>
            </h1>
            <p className="editorial-subtitle">
              Automated accounting, tax compliance, and financial reporting. 
              Trusted by 5,000+ businesses across the UAE.
            </p>
          </div>
          <div className="editorial-trust" data-animate>
            {trustMetrics.map((metric, idx) => (
              <div key={idx} className="editorial-metric">
                <div className="metric-icon-editorial">{metric.icon}</div>
                <div className="metric-value-editorial">{metric.value}</div>
                <div className="metric-label-editorial">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="editorial-cta" data-animate>
            <a href="mailto:hello@finanshels.com" className="btn-primary-modern btn-large">
              Schedule Consultation
              <FiArrowRight className="btn-icon" />
            </a>
            <a href="#pricing" className="btn-secondary-modern btn-large">
              View Plans
            </a>
          </div>
        </div>
        <div className="editorial-form-sidebar" data-animate>
          <div className="form-editorial">
            <h3 className="form-title-editorial">Request Consultation</h3>
            <p className="form-subtitle-editorial">Speak with our finance experts</p>
            <form className="modern-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name *" required className="modern-input" />
              <input type="email" placeholder="Email Address *" required className="modern-input" />
              <input type="tel" placeholder="Phone Number *" required className="modern-input" />
              <button type="submit" className="btn-primary-modern btn-full">
                Schedule Call
                <FiArrowRight className="btn-icon" />
              </button>
              <div className="form-security">
                <FiShield /> <span>Your information is secure</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="features-editorial">
        <div className="editorial-container">
          <div className="editorial-section-header" data-animate>
            <h2 className="editorial-section-title">Everything You Need</h2>
            <p className="editorial-section-description">Comprehensive bookkeeping and tax services for modern businesses.</p>
          </div>
          <div className="features-grid-editorial">
            {coreFeatures.map((feature, idx) => (
              <article key={idx} className="feature-article" data-animate>
                <div className="article-icon">{feature.icon}</div>
                <h3 className="article-title">{feature.title}</h3>
                <p className="article-description">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section-modern" id="pricing">
        <div className="section-container">
          <div className="section-header" data-animate>
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-description">Choose the plan that fits your business needs.</p>
          </div>
          <div className="pricing-grid-modern">
            {pricing.map((plan, idx) => (
              <div key={plan.name} className={`pricing-card-modern ${plan.popular ? 'pricing-featured' : ''}`} data-animate>
                {plan.popular && <div className="popular-badge-modern">Most Popular</div>}
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
                  Get Started
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

      <section className="cta-section-modern">
        <div className="cta-container-modern">
          <h3 className="cta-title-modern">Ready to get started?</h3>
          <p className="cta-description-modern">Schedule a consultation with our finance experts. First month free.</p>
          <div className="cta-actions-modern">
            <a href="mailto:hello@finanshels.com" className="btn-primary-modern btn-large">
              Schedule Consultation
              <FiArrowRight className="btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VariationE;
