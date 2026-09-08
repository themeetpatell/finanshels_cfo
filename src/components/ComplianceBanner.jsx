import { FiShield } from 'react-icons/fi';

/**
 * Thin full-width credential strip that sits directly under the navbar.
 *
 * It lives INSIDE the fixed <header> rather than in normal flow: the nav is
 * `position: fixed`, so an in-flow banner would render underneath it. Nav.jsx
 * measures the combined header and publishes `--header-h`, which the page
 * sections use for their top offset.
 */
const ComplianceBanner = () => (
  <div className="compliance-banner">
    <p className="compliance-banner-inner">
      <FiShield className="compliance-banner-icon" aria-hidden="true" />
      <span className="compliance-banner-primary">FTA-Approved Tax Agency Firm</span>
      <span className="compliance-banner-sep" aria-hidden="true" />
      <span className="compliance-banner-reg">
        {/* Dropped below 600px so the strip always stays a single line. */}
        <span className="compliance-banner-reg-long">FTA Registered Tax Agency </span>
        Registration No. 30022628
      </span>
    </p>
  </div>
);

export default ComplianceBanner;
