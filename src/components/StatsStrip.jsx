const StatsStrip = () => {
  const stats = [
    { value: '5,000+', label: 'Clients Serviced' },
    { value: '99.9%', label: 'Tax Compliance Rate' },
    { value: '10x', label: 'Faster Than Manual' },
    { value: '24/7', label: 'Dedicated Support' },
  ];
  return (
    <section className="section">
      <div className="stats-bar">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
