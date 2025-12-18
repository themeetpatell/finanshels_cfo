import { useEffect } from 'react';
import { FiArrowRight, FiCheckCircle, FiClock, FiShield, FiStar, FiTrendingUp, FiX, FiZap, FiBarChart2, FiAlertCircle, FiArrowDown } from 'react-icons/fi';
import FAQ from '../../components/FAQ';

const VariationC = () => {
  const problems = [
    { icon: <FiX />, title: 'Spreadsheet Chaos', problem: 'Excel files everywhere. Manual errors erode confidence in your numbers.' },
    { icon: <FiAlertCircle />, title: 'Month-End Scrambles', problem: 'Closes drag for weeks. No real-time visibility, late filings.' },
    { icon: <FiShield />, title: 'Tax Compliance Stress', problem: 'Corporate tax, VAT deadlines pile up. Miss one and penalties hit.' },
    { icon: <FiBarChart2 />, title: 'Fragmented Tools', problem: 'Banks, wallets, POS live in silos. Reconciliation becomes detective work.' },
  ];

  const solutions = [
    { icon: <FiZap />, title: 'Dedicated Finance Pod', solution: 'One team that knows your stack, sector, and local compliance.' },
    { icon: <FiCheckCircle />, title: 'Automated + Human QA', solution: 'Investor-grade accuracy with automated bookkeeping and human review.' },
    { icon: <FiClock />, title: '48-Hour Close Cycles', solution: 'Live dashboards, approvals, and close calendars baked into workflow.' },
    { icon: <FiShield />, title: 'Tax-Ready Filings', solution: 'UAE, KSA, UK, and India tax filings handled on cadence.' },
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
    <div className="modern-landing variation-c">
      <section className="hero-asymmetric">
        <div className="hero-asymmetric-container">
          <div className="hero-asymmetric-left" data-animate>
            <div className="problem-indicator">
              <FiAlertCircle />
              <span>Struggling with bookkeeping?</span>
            </div>
            <h1 className="hero-title-asymmetric">
              Stop losing sleep over <span className="gradient-text">spreadsheet chaos</span>
            </h1>
            <p className="hero-description-asymmetric">
              You started your business to pursue your passion—not to wrestle with tax filings and month-end scrambles. 
              Get investor-ready books in 48 hours. <strong>First month free.</strong>
            </p>
            <div className="hero-actions-asymmetric">
              <a href="mailto:hello@finanshels.com" className="btn-primary-modern btn-large">
                Solve My Bookkeeping Problem
                <FiArrowRight className="btn-icon" />
              </a>
            </div>
            <div className="trust-stats-asymmetric">
              <div className="trust-stat-item">
                <div className="stat-number">5,000+</div>
                <div className="stat-label">UAE Businesses</div>
              </div>
              <div className="trust-stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Compliance Rate</div>
              </div>
              <div className="trust-stat-item">
                <div className="stat-number">48h</div>
                <div className="stat-label">Close Cycle</div>
              </div>
            </div>
          </div>
          <div className="hero-asymmetric-right" data-animate>
            <div className="form-asymmetric">
              <div className="form-header-asymmetric">
                <h3 className="form-title">Get Your Free Consultation</h3>
                <p className="form-subtitle">Tell us your biggest bookkeeping challenge</p>
              </div>
              <form className="modern-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name *" required className="modern-input" />
                <input type="email" placeholder="Email Address *" required className="modern-input" />
                <input type="tel" placeholder="Phone Number *" required className="modern-input" />
                <button type="submit" className="btn-primary-modern btn-full">
                  Get Free Consultation
                  <FiArrowRight className="btn-icon" />
                </button>
                <div className="form-security">
                  <FiShield /> <span>100% confidential</span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <FiArrowDown />
          <span>See how we solve your problems</span>
        </div>
      </section>

      <section className="problems-section-asymmetric" id="problems">
        <div className="section-container-asymmetric">
          <div className="problems-header" data-animate>
            <h2 className="section-title-asymmetric">The Bookkeeping Problems You Face Every Day</h2>
            <p className="section-description">Sound familiar? You're not alone.</p>
          </div>
          <div className="problems-grid-asymmetric">
            {problems.map((item, idx) => (
              <div key={idx} className={`problem-card-asymmetric problem-${idx % 2 === 0 ? 'left' : 'right'}`} data-animate>
                <div className="problem-icon-red">{item.icon}</div>
                <h3 className="problem-title">{item.title}</h3>
                <p className="problem-text">{item.problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section-asymmetric" id="solution">
        <div className="section-container-asymmetric">
          <div className="solutions-header" data-animate>
            <h2 className="section-title-asymmetric">The Finanshels Solution</h2>
            <p className="section-description">One platform. One team. 10x faster.</p>
          </div>
          <div className="solutions-grid-asymmetric">
            {solutions.map((item, idx) => (
              <div key={idx} className={`solution-card-asymmetric solution-${idx % 2 === 0 ? 'right' : 'left'}`} data-animate>
                <div className="solution-icon-green">{item.icon}</div>
                <h3 className="solution-title">{item.title}</h3>
                <p className="solution-text">{item.solution}</p>
              </div>
            ))}
          </div>
          <div className="solution-cta" data-animate>
            <a href="mailto:hello@finanshels.com" className="btn-primary-modern btn-large">
              Get Your Finance Pod
              <FiArrowRight className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="pricing-section-modern" id="pricing">
        <div className="section-container">
          <div className="section-header" data-animate>
            <h2 className="section-title">Simple Pricing That Fits Your Business</h2>
            <p className="section-description">No hidden fees. Cancel anytime. <strong>First month free.</strong></p>
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
          <h3 className="cta-title-modern">Ready to solve your bookkeeping problems?</h3>
          <p className="cta-description-modern">Get investor-ready books in 48 hours. First month free, no commitment.</p>
          <div className="cta-actions-modern">
            <a href="mailto:hello@finanshels.com" className="btn-primary-modern btn-large">
              Start Free Trial
              <FiArrowRight className="btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VariationC;
