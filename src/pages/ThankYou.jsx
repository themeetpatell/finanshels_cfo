import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <section className="thank-you-page">
      <div className="thank-you-card">
        <div className="thank-you-icon" aria-hidden="true">
          <FiCheckCircle />
        </div>
        <h1>Thanks for reaching out!</h1>
        <p>
          Your consultation request is in. Our team will contact you shortly to schedule
          your 30-minute CFO strategy call.
        </p>
        <div className="thank-you-actions">
          <Link to="/" className="thank-you-btn">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
