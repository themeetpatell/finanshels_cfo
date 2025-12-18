import { useEffect, useState, useRef } from 'react';
import { FiArrowRight, FiBarChart2, FiCheckCircle, FiClock, FiShield, FiStar, FiTrendingUp, FiUsers, FiAward, FiZap, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import FAQ from '../components/FAQ';

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  const trustLogos = ['Zoho', 'Xero', 'QuickBooks', 'FreshBooks'];

  const heroPerks = [
    { title: 'First month free', copy: 'No commitment. Keep every deliverable.' },
    { title: 'Dedicated finance pod', copy: 'Bookkeeping, tax, and reporting in one lane.' },
    { title: 'UAE tax compliant', copy: 'VAT and Corporate Tax handled on schedule.' },
  ];

  const trustBadges = [
    { icon: <FiUsers />, value: '5,000+', label: 'UAE Businesses' },
    { icon: <FiAward />, value: '99.9%', label: 'Compliance Rate' },
    { icon: <FiZap />, value: '48h', label: 'Close Cycle' },
    { icon: <FiStar />, value: '4.9/5', label: 'Google Rating' },
  ];

  const benefits = [
    { icon: <FiClock />, title: 'Save 10+ hours/week', copy: 'Automated reconciliations and approvals free your team to focus on growth.', gradientClass: 'bg-gradient-red-500' },
    { icon: <FiShield />, title: 'Zero compliance risk', copy: 'Never miss a filing deadline. 99.9% compliance rate with audit-ready books.', gradientClass: 'bg-gradient-cyan-500' },
    { icon: <FiTrendingUp />, title: 'Real-time insights', copy: 'Make data-driven decisions daily with live dashboards and 48h close cycles.', gradientClass: 'bg-gradient-emerald-500' },
    { icon: <FiBarChart2 />, title: 'Investor-ready', copy: 'Clean, accurate books that investors and banks trust. No more spreadsheet chaos.', gradientClass: 'bg-gradient-pink-500' },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: 'AED 299',
      period: '/mo',
      desc: 'For lean teams up to 50 transactions/month',
      items: ['Corporate tax filing (annual)', 'VAT registration & quarterly filing', 'Quarterly statements', 'Dedicated support manager'],
    },
    {
      name: 'Essential',
      price: 'AED 560',
      period: '/mo',
      desc: 'Most popular · Up to 200 transactions/month',
      items: [
        'Everything in Starter',
        'Monthly account reconciliation',
        'Quarterly reporting',
        'Priority support',
        'Expense categorization',
      ],
      popular: true,
    },
    {
      name: 'Growth',
      price: 'AED 800',
      period: '/mo',
      desc: 'For scaling teams up to 2,000 transactions/month',
      items: ['Everything in Essential', 'Cash flow analysis', 'Budget vs actuals', 'Multi-currency support', 'Dedicated account manager'],
    },
  ];

  const testimonials = [
    {
      quote: '"The real-time financial insights have been game-changing. We close in 48 hours and make decisions daily instead of waiting for month-end."',
      name: 'Mohammed Hassan',
      role: 'CEO, TechStart MENA',
      rating: 5,
      avatar: 'MH',
    },
    {
      quote: '"Finanshels took tax compliance off our plate. VAT, payroll, filings—handled. We finally have clean books investors trust."',
      name: 'Sarah Al-Rashid',
      role: 'Founder, Desert Bloom Interiors',
      rating: 5,
      avatar: 'SA',
    },
    {
      quote: '"We saved 10+ hours a week. Approvals, reconciliations, and dashboards just work. The pod feels like part of our team."',
      name: 'Priya Sharma',
      role: 'Owner, Spice Route Restaurant',
      rating: 5,
      avatar: 'PS',
    },
    {
      quote: '"Best investment we made. Our books are always clean, taxes filed on time, and we have real-time visibility into our finances. Highly recommend."',
      name: 'Ahmed Al-Mansoori',
      role: 'Founder, Digital Solutions UAE',
      rating: 5,
      avatar: 'AM',
    },
    {
      quote: '"Switched from a traditional accounting firm and never looked back. Faster, more accurate, and actually affordable. The dashboard alone is worth it."',
      name: 'Fatima Al-Zahra',
      role: 'CEO, GreenTech Innovations',
      rating: 5,
      avatar: 'FZ',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setIsVisible((prev) => ({ ...prev, [entry.target.id || entry.target.dataset.animate]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observerRef.current = observer;

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      if (observerRef.current) {
        elements.forEach((el) => {
          if (observerRef.current) {
            observerRef.current.unobserve(el);
          }
        });
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="modern-landing">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      <section className="modern-hero">
        <div className="hero-container">
          <div className="hero-content" data-animate id="hero-content">
            <div className="hero-badge">
              <FiZap className="pulse-icon" />
              <span>UAE's #1 Bookkeeping Service</span>
            </div>
            <h1 className="hero-title">
              Stop wasting time on <span className="gradient-text">bookkeeping</span>
              <br />
              Get investor-ready books in <span className="gradient-text">48 hours</span>
            </h1>
            <p className="hero-description">
              Automated accounting, tax compliance, and real-time dashboards. <strong>First month free.</strong>
            </p>
            <div className="hero-actions-modern">
              <a href="mailto:hello@finanshels.com" className="btn-primary-modern">
                Get free consultation
                <FiArrowRight className="btn-icon" />
              </a>
              <a href="#pricing" className="btn-secondary-modern">
                View pricing
              </a>
            </div>
            <div className="trust-badges-modern">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="trust-badge-modern">
                  <div className="trust-icon">{badge.icon}</div>
                  <div>
                    <div className="trust-value">{badge.value}</div>
                    <div className="trust-label">{badge.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-form-modern" data-animate id="hero-form">
            <div className="form-card-glass">
              <div className="form-urgency-modern">
                <FiZap />
                <span>Limited spots available this month</span>
              </div>
              <div className="form-content">
                <h3 className="form-title">Get your free consultation</h3>
                <p className="form-subtitle">Join 5,000+ UAE businesses with investor-ready books</p>
                <form className="modern-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name *" required className="modern-input" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Email Address *" required className="modern-input" />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Phone Number *" required className="modern-input" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Company Name (optional)" className="modern-input" />
                  </div>
                  <button type="submit" className="btn-primary-modern btn-full">
                    Claim free consultation
                    <FiArrowRight className="btn-icon" />
                  </button>
                  <div className="form-security">
                    <FiShield />
                    <span>Your data is secure and will never be shared</span>
                  </div>
                  <div className="form-badges-modern">
                    <div className="form-badge-item">
                      <FiCheckCircle />
                      <span>Free first month</span>
                    </div>
                    <div className="form-badge-item">
                      <FiCheckCircle />
                      <span>No commitment</span>
                    </div>
                    <div className="form-badge-item">
                      <FiCheckCircle />
                      <span>24h response</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-section-modern">
        <div className="metrics-container">
          {[
            { label: 'Speed to go-live', value: '7 days', icon: <FiClock />, color: 'orange' },
            { label: 'Close cycle', value: '48 hours', icon: <FiClock />, color: 'blue' },
            { label: 'Compliance rating', value: '99.9%', icon: <FiShield />, color: 'green' },
            { label: 'Time saved', value: '10+ hrs/week', icon: <FiTrendingUp />, color: 'purple' },
          ].map((stat, idx) => (
            <div key={stat.label} className="metric-card-modern" data-animate style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className={`metric-icon-modern metric-${stat.color}`}>
                {stat.icon}
              </div>
              <div className="metric-value-modern">{stat.value}</div>
              <div className="metric-label-modern">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section-modern">
        <div className="section-container">
          <div className="section-header" data-animate>
            <div className="section-badge">Why choose Finanshels</div>
            <h2 className="section-title">
              Save time, reduce risk, make <span className="gradient-text">better decisions</span>
            </h2>
            <p className="section-description">Stop juggling spreadsheets and tax deadlines. Get a dedicated finance pod that handles everything.</p>
          </div>
          <div className="benefits-grid-modern">
            {benefits.map((benefit, idx) => (
              <div key={benefit.title} className="benefit-card-modern" data-animate style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`benefit-icon-modern ${benefit.gradientClass}`}>
                  {benefit.icon}
                </div>
                <h3 className="benefit-title-modern">{benefit.title}</h3>
                <p className="benefit-copy-modern">{benefit.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section-modern" id="pricing">
        <div className="section-container">
          <div className="section-header" data-animate>
            <div className="section-badge">Simple pricing</div>
            <h2 className="section-title">
              Transparent plans for every <span className="gradient-text">business</span>
            </h2>
            <p className="section-description">Best prices in the market. No hidden fees. Cancel anytime. <strong>First month free.</strong></p>
          </div>
          <div className="pricing-grid-modern">
            {pricing.map((plan, idx) => (
              <div key={plan.name} className={`pricing-card-modern ${plan.popular ? 'pricing-featured' : ''}`} data-animate style={{ animationDelay: `${idx * 0.1}s` }}>
                {plan.popular && <div className="popular-badge-modern">Most popular</div>}
                <div className="pricing-header">
                  <h3 className="plan-name-modern">{plan.name}</h3>
                  <div className="plan-price-modern">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">{plan.period}</span>
                  </div>
                  <p className="plan-desc-modern">{plan.desc}</p>
                </div>
                <ul className="features-list-modern">
                  {plan.items.map((item) => (
                    <li key={item} className="feature-item-modern">
                      <FiCheckCircle className="feature-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="mailto:hello@finanshels.com" className={`btn-pricing-modern ${plan.popular ? 'btn-pricing-featured' : ''}`}>
                  Get started
                  <FiArrowRight className="btn-icon" />
                </a>
                {plan.popular && (
                  <div className="pricing-guarantee-modern">
                    <FiShield />
                    <span>Money-back guarantee</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section-modern" id="reviews">
        <div className="section-container">
          <div className="section-header" data-animate>
            <div className="section-badge">Client success stories</div>
            <h2 className="section-title">
              Trusted by <span className="gradient-text">5,000+ UAE businesses</span>
            </h2>
            <p className="section-description">Don't just take our word for it. Here is what our clients say.</p>
          </div>
          <div className="testimonials-carousel-modern">
            <button className="carousel-btn carousel-prev" onClick={prevTestimonial}>
              <FiChevronLeft />
            </button>
            <div className="testimonials-track">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className={`testimonial-card-modern ${idx === activeTestimonial ? 'active' : ''}`}>
                  <div className="testimonial-rating-modern">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="star-filled-modern" />
                    ))}
                  </div>
                  <div className="quote-mark-modern">"</div>
                  <p className="testimonial-quote-modern">{testimonial.quote}</p>
                  <div className="testimonial-author-modern">
                    <div className="author-avatar-modern">{testimonial.avatar}</div>
                    <div>
                      <div className="author-name-modern">{testimonial.name}</div>
                      <div className="author-role-modern">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn carousel-next" onClick={nextTestimonial}>
              <FiChevronRight />
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, idx) => (
                <button key={idx} className={`carousel-dot ${idx === activeTestimonial ? 'active' : ''}`} onClick={() => setActiveTestimonial(idx)} />
              ))}
            </div>
          </div>
          <div className="rating-badge-modern">
            <FiStar className="rating-star" />
            <span>4.9/5 on Google Reviews</span>
            <span className="rating-count">(127 reviews)</span>
          </div>
        </div>
      </section>

      <div className="section-container">
        <FAQ />
      </div>

      <section className="cta-section-modern">
        <div className="cta-container-modern">
          <div className="cta-content-modern">
            <div className="cta-badge-modern">Ready to get started?</div>
            <h3 className="cta-title-modern">Get investor-ready books in 48 hours. First month free.</h3>
            <p className="cta-description-modern">Join 5,000+ UAE businesses saving 10+ hours per week on bookkeeping. No commitment required.</p>
          </div>
          <div className="cta-actions-modern">
            <a href="mailto:hello@finanshels.com" className="btn-primary-modern btn-large">
              Get free consultation
              <FiArrowRight className="btn-icon" />
            </a>
            <a href="#pricing" className="btn-secondary-modern btn-large">
              View pricing
            </a>
          </div>
        </div>
      </section>

      <div className="sticky-cta-mobile-modern">
        <a href="mailto:hello@finanshels.com" className="btn-primary-modern btn-full">
          Get free consultation
          <FiArrowRight className="btn-icon" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
