import { FiAlertTriangle, FiClock, FiFileText, FiTrendingDown } from 'react-icons/fi';

const problems = [
  {
    title: 'Spreadsheet Chaos',
    body: 'Excel files flying around, manual entry, and human errors make month-end painful.',
    icon: FiFileText,
  },
  {
    title: 'Month-End Scrambles',
    body: 'Books only close at month end. No real-time visibility to guide decisions.',
    icon: FiClock,
  },
  {
    title: 'Flying Blind',
    body: 'Decisions without accurate, current data risk cash leaks and missed targets.',
    icon: FiTrendingDown,
  },
  {
    title: 'Tax Compliance Stress',
    body: 'UAE Corporate Tax and VAT deadlines loom. Penalties feel one mistake away.',
    icon: FiAlertTriangle,
  },
];

const ProblemGrid = () => {
  return (
    <section className="section problem-grid">
      <div className="section-heading">
        <div className="pill ghost">The Problem</div>
        <h2>
          Managing Small Business Accounting is <span className="accent-text">Taxing</span>
        </h2>
        <p className="muted">
          You built your business to serve customers, not to wrestle with spreadsheets and filings. We take the
          financial admin off your plate so you can focus on growth.
        </p>
      </div>
      <div className="grid two">
        {problems.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="card">
              <div className="badge-icon">
                <Icon />
              </div>
              <div className="card-title">{p.title}</div>
              <p className="muted">{p.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProblemGrid;
