import { FiShield } from 'react-icons/fi';

const Compliance = ({ compliance }) => {
  if (!compliance) return null;
  return (
    <section className="section" id="compliance">
      <div className="section-heading">
        <div className="pill">Compliance</div>
        <h2>{compliance.title}</h2>
        <p className="muted">Local specialists keep filings on track and audit trails clean.</p>
      </div>
      <div className="grid three">
        {compliance.bullets.map((item) => (
          <div key={item} className="card">
            <div className="icon-chip">
              <FiShield />
            </div>
            <div className="card-title">{item}</div>
            <p className="muted">Documented, reviewed, and delivered with your close package.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Compliance;
