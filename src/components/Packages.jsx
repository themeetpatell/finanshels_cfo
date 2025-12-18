import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

const Packages = ({ packages }) => {
  return (
    <section className="section" id="pricing">
      <div className="section-heading">
        <div className="pill">Pricing</div>
        <h2>Pick the pace that fits your stage.</h2>
        <p className="muted">
          Transparent packages with fast onboarding. Adjust scope as you scale, keep the same pod on your business.
        </p>
      </div>
      <div className="grid three">
        {packages.map((pkg, idx) => (
          <div key={pkg.name} className={`card ${idx === 1 ? 'card-accent' : ''}`}>
            <div className="card-top">
              <div className="pill ghost">{pkg.name}</div>
              <div className="price">{pkg.price}</div>
              <p>{pkg.detail}</p>
            </div>
            <div className="card-list">
              <div className="card-line">
                <FiCheckCircle /> Weekly reconciliations and variance notes
              </div>
              <div className="card-line">
                <FiCheckCircle /> VAT/sales tax-ready books
              </div>
              <div className="card-line">
                <FiCheckCircle /> Monthly close package and dashboards
              </div>
            </div>
            <a className="primary-btn ghost" href="mailto:hello@finanshels.com">
              Start {pkg.name} <FiArrowUpRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
