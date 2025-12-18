import { FiArrowDownCircle } from 'react-icons/fi';

const Process = ({ steps }) => {
  return (
    <section className="section" id="process">
      <div className="section-heading">
        <div className="pill">How we work</div>
        <h2>Modern finance ops with human oversight.</h2>
        <p className="muted">
          A blended pod of accountants, tax specialists, and automation engineers that ships clean books and compliance.
        </p>
      </div>
      <div className="process">
        {steps.map((step, idx) => (
          <div key={step.title} className="process-step">
            <div className="step-index">{String(idx + 1).padStart(2, '0')}</div>
            <div>
              <div className="card-title">{step.title}</div>
              <p className="muted">{step.detail}</p>
            </div>
            {idx !== steps.length - 1 && (
              <div className="step-divider">
                <FiArrowDownCircle />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
