import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import './ThankYou.css';

// Simple sanity check for the email Zoho appends to the redirect URL. The value
// is user-supplied via the query string, so we only render it after it matches.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const rawEmail = searchParams.get('customer_email') || '';
  const customerEmail = EMAIL_PATTERN.test(rawEmail) ? rawEmail : '';

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'thank_you_page_view' });

    let submitted = '';
    let email = '';
    try {
      submitted = window.sessionStorage.getItem('consultation_submitted') || '';
      email = window.sessionStorage.getItem('consultation_email') || '';
    } catch {
      // sessionStorage unavailable (private mode / blocked) — skip enhanced data
    }

    // Fire the Google Ads conversion ONLY when this page was reached via a real
    // consultation submission. Clearing the flag afterwards means a refresh or a
    // direct/bookmarked visit to /thank-you never double-counts the conversion.
    if (submitted) {
      window.dataLayer.push({
        event: 'consultation_form_ec',
        enhanced_conversion_data: { email },
        user_data: { email }
      });
      try {
        window.sessionStorage.removeItem('consultation_submitted');
        window.sessionStorage.removeItem('consultation_email');
      } catch {
        // ignore
      }
    }
  }, []);

  return (
    <section className="thank-you-page">
      <div className="thank-you-card">
        <div className="thank-you-icon" aria-hidden="true">
          <FiCheckCircle />
        </div>
        <h1>Thanks for reaching out!</h1>
        {customerEmail ? (
          <p>
            Your call is booked. A confirmation and calendar invite are on their way to{' '}
            <strong>{customerEmail}</strong>. We look forward to speaking with you.
          </p>
        ) : (
          <p>
            Your consultation request is in. Our team will contact you shortly to schedule
            your 30-minute CFO strategy call.
          </p>
        )}
        <div className="thank-you-actions">
          <Link to="/" className="thank-you-btn">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
