import { FiCheckCircle } from 'react-icons/fi';

const plans = [
  {
    name: 'Starter',
    price: 'AED 299/mo',
    meta: 'Up to 50 transactions/year',
    features: [
      'Corporate tax filing (annual)',
      'CT registration',
      'VAT registration & quarterly filing',
      'Quarterly financial statements',
      'Dedicated support manager',
      '30 min free tax consultation',
    ],
  },
  {
    name: 'Essential',
    price: 'AED 560/mo',
    meta: 'Up to 200 transactions/year',
    features: [
      'Everything in Starter',
      'Monthly account reconciliation',
      'Quarterly accounting reports',
      'Priority support',
      'Expense categorization',
      'Financial health check-up',
    ],
    popular: true,
  },
  {
    name: 'Growth',
    price: 'AED 800/mo',
    meta: 'Up to 2,000 transactions/year',
    features: [
      'Everything in Essential',
      'Quarterly bookkeeping',
      'Cash flow analysis',
      'Budget vs actual reports',
      'Multi-currency support',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Scale',
    price: 'AED 2,000/mo',
    meta: 'Up to 3,600 transactions/year',
    features: [
      'Everything in Growth',
      'Monthly bookkeeping',
      'Advanced reporting suite',
      'Custom dashboard',
      'API integrations',
      'CFO advisory services',
    ],
  },
];

const PricingTable = () => {
  return (
    <section className="section" id="pricing">
      <div className="section-heading">
        <div className="pill ghost">Simple Pricing</div>
        <h2>
          Transparent Plans for <span className="accent-text">Every Business</span>
        </h2>
        <p className="muted">Best prices in the market. No hidden fees. Cancel anytime.</p>
      </div>
      <div className="card subtle" style={{ marginBottom: '1rem' }}>
        🎉 Try Your First Month Free — No Commitment! Only pay if you are satisfied.
      </div>
      <div className="pricing-table">
        {plans.map((plan) => (
          <div key={plan.name} className={`card ${plan.popular ? 'plan-popular' : ''}`}>
            <div className="pill ghost" style={{ width: 'fit-content' }}>
              {plan.popular ? 'Most Popular' : plan.name}
            </div>
            {!plan.popular && <h3>{plan.name}</h3>}
            {plan.popular && <h3 style={{ color: '#0b1021' }}>{plan.name}</h3>}
            <div className="price">{plan.price}</div>
            <div className="plan-meta">{plan.meta}</div>
            <div className="feature-list">
              {plan.features.map((f) => (
                <div key={f} className="feature">
                  <FiCheckCircle className="icon" /> {f}
                </div>
              ))}
            </div>
            <a className="primary-btn wide" href="mailto:hello@finanshels.com">
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
