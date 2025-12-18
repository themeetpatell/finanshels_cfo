import { FiCheck, FiCpu, FiTrendingUp } from 'react-icons/fi';

const iconMap = [FiCpu, FiTrendingUp, FiCheck];

const Services = ({ services }) => {
  return (
    <section className="section">
      <div className="section-heading">
        <div className="pill">Services</div>
        <h2>Everything you expect from a modern finance team.</h2>
        <p className="muted">
          A dedicated pod keeps your ledgers current, tax-ready, and investor-friendly—without you chasing status.
        </p>
      </div>
      <div className="grid three">
        {services.map((service, idx) => {
          const Icon = iconMap[idx % iconMap.length];
          return (
            <div key={service} className="card">
              <div className="icon-chip">
                <Icon />
              </div>
              <div className="card-title">{service}</div>
              <p className="muted">Delivered by a pod that handles your banks, wallets, and tax stack.</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
