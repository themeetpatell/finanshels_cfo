import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

const Hero = ({ eyebrow, title, description, ctaPrimary, ctaSecondary, stats, highlights }) => {
  return (
    <section className="section hero">
      <div className="hero-content">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <div className="hero-actions">
          <a className="primary-btn" href="mailto:hello@finanshels.com">
            {ctaPrimary}
            <FiArrowUpRight />
          </a>
          <a className="ghost-btn" href="#pricing">
            {ctaSecondary}
          </a>
        </div>
        <div className="hero-highlights">
          {highlights.map((item) => (
            <div key={item} className="highlight-chip">
              <FiCheckCircle /> {item}
            </div>
          ))}
        </div>
        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-panel">
        <div className="panel-header">
          <span className="pill">FinOps pod</span>
          <span className="muted">Live dashboards · Monthly closes · VAT-ready</span>
        </div>
        <div className="panel-body">
          <div className="panel-card">
            <div>
              <div className="panel-title">Weekly reconciliations</div>
              <p className="muted">Multi-bank, Stripe, and wallet coverage with human review.</p>
            </div>
            <span className="pill ghost">Automated + Human</span>
          </div>
          <div className="panel-card">
            <div>
              <div className="panel-title">Close calendar</div>
              <p className="muted">Two-day close window with variance notes and approvals.</p>
            </div>
            <span className="pill ghost">48h SLA</span>
          </div>
          <div className="panel-card accent">
            <div>
              <div className="panel-title">Compliance lock</div>
              <p className="muted">VAT and filings mapped to each jurisdiction.</p>
            </div>
            <span className="pill light">Audit-friendly</span>
          </div>
        </div>
        <div className="panel-footer">
          <span className="muted">Built for founders · Finance leaders · Ops</span>
          <a className="text-link" href="#process">
            See the process <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
