import { FiActivity, FiBarChart2, FiCpu, FiShield, FiStar } from 'react-icons/fi';

const SolutionSplit = () => {
  const bullets = [
    { icon: FiStar, title: 'Dedicated finance team', text: 'A pod that knows your stack and business inside-out.' },
    { icon: FiCpu, title: 'Automated bookkeeping', text: 'APIs + human review for precise, real-time books.' },
    { icon: FiBarChart2, title: 'Live insights', text: 'Dashboards, variance notes, and cash runway alerts.' },
    { icon: FiShield, title: 'UAE tax compliance', text: 'Corporate tax, VAT registration, and filings handled.' },
  ];

  return (
    <section className="section">
      <div className="section-heading">
        <div className="pill ghost">The Solution</div>
        <h2>
          One Platform. One Team. <span className="accent-text">10x Faster.</span>
        </h2>
        <p className="muted">
          One dedicated pod manages bookkeeping, tax, and reporting. Built for founders who want finance ops
          that just works.
        </p>
      </div>
      <div className="solution">
        <ul className="solution-list">
          {bullets.map((b) => {
            const Icon = b.icon;
            return (
              <li key={b.title}>
                <span className="badge-icon">
                  <Icon />
                </span>
                <div>
                  <div className="card-title">{b.title}</div>
                  <p className="muted">{b.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="solution-card">
          <div className="pill ghost">Financial Dashboard</div>
          <div className="solution-metric">
            <div>
              <div className="muted">Monthly Revenue</div>
              <div className="hero-title" style={{ fontSize: '1.4rem', margin: '0.2rem 0' }}>
                AED 245K
              </div>
              <div className="pill ghost" style={{ display: 'inline-flex' }}>
                +12% vs last month
              </div>
            </div>
            <div>
              <div className="muted">Expenses</div>
              <div className="hero-title" style={{ fontSize: '1.4rem', margin: '0.2rem 0' }}>
                AED 89K
              </div>
              <div className="pill" style={{ display: 'inline-flex' }}>
                On budget
              </div>
            </div>
          </div>
          <div className="muted" style={{ marginTop: '1rem' }}>
            Tax Compliance Status: <strong style={{ color: '#fff' }}>All filings up to date</strong>
          </div>
          <div className="chart">
            {[40, 60, 50, 70, 80, 65, 90, 75].map((h, idx) => (
              <div key={idx} className="bar" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="pill" style={{ marginTop: '0.75rem', display: 'inline-flex' }}>
            <FiActivity /> Live
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSplit;
