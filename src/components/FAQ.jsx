const faqs = [
  {
    q: 'What does the free first month include?',
    a: 'Full bookkeeping and reporting for one month with no commitment. Keep the outputs even if you do not continue.',
  },
  {
    q: 'How does Finanshels handle UAE Corporate Tax compliance?',
    a: 'We set up CT registration, track deadlines, prepare filings, and maintain audit-ready documentation.',
  },
  {
    q: 'What accounting software do you support?',
    a: 'We work with Xero, Zoho Books, QuickBooks, FreshBooks, and your payment processors (Stripe, PayPal, POS).',
  },
  {
    q: 'How quickly can I get started?',
    a: 'Typical onboarding is 5–7 days. We map your stack, connect banks/wallets, and start reconciliations immediately.',
  },
  {
    q: 'What happens if my business grows and needs more support?',
    a: 'We can expand scope (consolidations, CFO reviews) without changing your pod, so context stays intact.',
  },
];

const FAQ = () => {
  return (
    <section className="faq-section-modern">
      <div className="section-container">
        <div className="section-header" data-animate>
          <div className="section-badge">FAQ</div>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-description">Everything you need to know about working with Finanshels.</p>
        </div>
        <div className="faq-modern">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item-modern">
              <summary className="faq-question-modern">{item.q}</summary>
              <p className="faq-answer-modern">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
