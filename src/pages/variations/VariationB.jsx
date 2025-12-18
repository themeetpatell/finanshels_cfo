import { useEffect, useState } from 'react';
import { FiArrowRight, FiCheckCircle, FiClock, FiShield, FiStar, FiTrendingUp, FiUsers, FiAward, FiZap, FiBarChart2, FiPlay } from 'react-icons/fi';
import FAQ from '../../components/FAQ';

const VariationB = () => {
  const [isVisible, setIsVisible] = useState({});

  const socialProof = [
    { value: '5,000+', label: 'UAE Businesses', icon: <FiUsers />, color: 'orange' },
    { value: '4.9/5', label: 'Average Rating', icon: <FiStar />, color: 'yellow' },
    { value: '99.9%', label: 'Compliance Rate', icon: <FiAward />, color: 'green' },
    { value: '48h', label: 'Close Time', icon: <FiZap />, color: 'blue' },
  ];

  const keyBenefits = [
    { icon: <FiClock />, title: 'Save 10+ Hours Weekly', benefit: 'Automated bookkeeping frees your team', stat: '10+ hrs/week', gradient: 'from-orange-500 to-red-500' },
    { icon: <FiShield />, title: 'Zero Compliance Risk', benefit: 'Never miss a deadline', stat: '99.9% success', gradient: 'from-blue-500 to-cyan-500' },
    { icon: <FiTrendingUp />, title: 'Real-Time Decisions', benefit: '48-hour close cycles', stat: 'Daily insights', gradient: 'from-green-500 to-emerald-500' },
    { icon: <FiBarChart2 />, title: 'Investor-Ready', benefit: 'Clean books investors trust', stat: '100% audit-ready', gradient: 'from-purple-500 to-pink-500' },
  ];

  const testimonials = [
    { quote: '"We saved 10+ hours a week. The pod feels like part of our team."', name: 'Priya Sharma', role: 'Owner, Spice Route Restaurant', rating: 5, company: 'Spice Route' },
    { quote: '"Finanshels took tax compliance off our plate. Clean books investors trust."', name: 'Sarah Al-Rashid', role: 'Founder, Desert Bloom Interiors', rating: 5, company: 'Desert Bloom' },
    { quote: '"Game-changing insights. We close in 48 hours and make decisions daily."', name: 'Mohammed Hassan', role: 'CEO, TechStart MENA', rating: 5, company: 'TechStart' },
    { quote: '"Best investment we made. Our books are always clean and taxes filed on time."', name: 'Ahmed Al-Mansoori', role: 'Founder, Digital Solutions', rating: 5, company: 'Digital Solutions' },
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
    <div className="modern-landing variation-b">
      <section className="hero-fullwidth-b">
        <div className="hero-fullwidth-content">
          <div className="social-proof-top">
            {socialProof.map((item, idx) => (
              <div key={idx} className="proof-item-b">
                <div className={`proof-icon-b proof-${item.color}`}>{item.icon}</div>
                <div className="proof-content-b">
                  <div className="proof-value-b">{item.value}</div>
                  <div className="proof-label-b">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="hero-center-b" data-animate>
            <h1 className="hero-title-fullwidth">
              Get investor-ready books in <span className="gradient-text">48 hours</span>
              <br />
              Save <span className="gradient-text">10+ hours</span> every week
            </h1>
            <p className="hero-description-fullwidth">
              Join 5,000+ UAE businesses using Finanshels for automated bookkeeping, tax compliance, and real-time financial insights.
            </p>
            <div className="hero-cta-fullwidth">
              <a href="mailto:hello@finanshels.com" className="btn-primary-modern btn-large">
                Start Free Trial
                <FiArrowRight className="btn-icon" />
              </a>
              <a href="#pricing" className="btn-secondary-modern btn-large">
                See Pricing
              </a>
            </div>
          </div>
          <div className="form-floating-b" data-animate>
            <div className="form-card-floating">
              <h3 className="form-title">Get Started Free</h3>
              <form className="modern-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name *" required className="modern-input" />
                <input type="email" placeholder="Email Address *" required className="modern-input" />
                <input type="tel" placeholder="Phone Number *" required className="modern-input" />
                <button type="submit" className="btn-primary-modern btn-full">
                  Claim Free Month
                  <FiArrowRight className="btn-icon" />
                </button>
                <div className="form-security">
                  <FiShield /> <span>Secure & confidential</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-hero-b">
        <div className="section-container">
          <div className="testimonials-marquee">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div key={idx} className="testimonial-chip">
                <div className="chip-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <FiStar key={i} className="star-filled-modern" />
                  ))}
                </div>
                <p className="chip-quote">"{t.quote}"</p>
                <div className="chip-author">{t.name} · {t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-vb">
        <div className="section-container">
          <div className="section-header" data-animate>
            <h2 className="section-title">Why 5,000+ UAE Businesses Choose Finanshels</h2>
            <p className="section-description">Everything you need to run your finance operations smoothly.</p>
          </div>
          <div className="benefits-grid-vb">
            {keyBenefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card-vb-large" data-animate>
                <div className={`benefit-icon-large bg-gradient-${benefit.gradient.split(' ')[1]}`}>
                  {benefit.icon}
                </div>
                <div className="benefit-stat-large">{benefit.stat}</div>
                <h3 className="benefit-title-large">{benefit.title}</h3>
                <p className="benefit-copy-large">{benefit.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-grid-b" id="reviews">
        <div className="section-container">
          <div className="section-header" data-animate>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">Real stories from real businesses.</p>
          </div>
          <div className="testimonials-grid-vb">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card-vb-large" data-animate>
                <div className="testimonial-rating-modern">
                  {[...Array(t.rating)].map((_, i) => (
                    <FiStar key={i} className="star-filled-modern" />
                  ))}
                </div>
                <p className="testimonial-quote-modern">"{t.quote}"</p>
                <div className="testimonial-author-modern">
                  <div className="author-name-modern">{t.name}</div>
                  <div className="author-role-modern">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section-modern" id="pricing">
        <div className="section-container">
          <div className="section-header" data-animate>
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-description">All plans include first month free. No commitment required.</p>
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
          <h3 className="cta-title-modern">Ready to save 10+ hours every week?</h3>
          <p className="cta-description-modern">Join 5,000+ UAE businesses. First month free, no commitment.</p>
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

export default VariationB;
