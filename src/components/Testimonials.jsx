import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    quote:
      'Finanshels transformed how we handle finance. I was spending 20+ hours a month on bookkeeping—now it just happens.',
    name: 'Sarah Al-Rashid',
    title: 'Founder, Desert Bloom Interiors',
  },
  {
    quote:
      'Real-time insights changed the game. I make decisions daily instead of waiting for month-end reports, and compliance is covered.',
    name: 'Mohammed Hassan',
    title: 'CEO, TechStart MENA',
  },
  {
    quote:
      'As a restaurant owner, I dreaded bookkeeping. Finanshels handles it flawlessly and gives me margin insights I never had.',
    name: 'Priya Sharma',
    title: 'Owner, Spice Route Restaurant',
  },
  {
    quote: 'Their pod learned our stack fast. We closed the month in 2 days with clean VAT support.',
    name: 'Rami Khalil',
    title: 'COO, UrbanCraft',
  },
  {
    quote: 'Multi-entity consolidation finally makes sense. Board packs are investor-ready every month.',
    name: 'Anika Rao',
    title: 'Founder, Skala Labs',
  },
  {
    quote: 'Payroll, WPS, and CT filings just happen. I get dashboards instead of chasing approvals.',
    name: 'Omar Siddiqui',
    title: 'CEO, Noonrise',
  },
];

const Testimonials = () => {
  return (
    <section className="section">
      <div className="section-heading">
        <div className="pill ghost">Client Success Stories</div>
        <h2>
          Trusted by <span className="accent-text">5,000+ Businesses</span>
        </h2>
        <p className="muted">Hear what founders say about working with Finanshels.</p>
      </div>
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div key={`${t.name}-${idx}`} className="card testimonial-card">
              <div className="testimonial-quote">“{t.quote}”</div>
              <div className="muted">{t.name}</div>
              <div className="muted">{t.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pill ghost" style={{ marginTop: '1rem', width: 'fit-content' }}>
        <FiStar /> 4.9/5 on Google Reviews
      </div>
    </section>
  );
};

export default Testimonials;
