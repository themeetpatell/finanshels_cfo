import { useEffect, useRef, useState } from 'react';
import {
  FiCheckCircle,
  FiStar,
  FiFileText,
  FiShield,
  FiUsers,
  FiZap,
  FiBarChart2,
  FiBriefcase,
  FiCreditCard,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiAlertTriangle,
  FiTrendingDown,
  FiUserX
} from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const testimonialsTrackRef = useRef(null);

  // Zoho advanced lead UTM capture (provided snippet)
  useEffect(() => {
    if (window.zfutmInitialized) return;
    window.zfutmInitialized = true;

    function ZFAdvLead() {}
    ZFAdvLead.utmPValObj = ZFAdvLead.utmPValObj || {};
    ZFAdvLead.utmPNameArr = new Array('utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content');
    ZFAdvLead.utmcustPNameArr = new Array();
    ZFAdvLead.isSameDomain = false;

    ZFAdvLead.prototype.zfautm_sC = function(paramName, path, domain, secure) {
      var value = ZFAdvLead.utmPValObj[paramName];
      if (typeof value !== 'undefined' && value !== null) {
        var cookieStr = paramName + '=' + encodeURIComponent(value);
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + 7);
        cookieStr += '; expires=' + exdate.toGMTString();
        cookieStr += '; path=/';
        if (domain) {
          cookieStr += '; domain=' + encodeURIComponent(domain);
        }
        if (secure) {
          cookieStr += '; secure';
        }
        document.cookie = cookieStr;
      }
    };
    ZFAdvLead.prototype.zfautm_ini = function() {
      this.zfautm_bscPCap();
      var url_search = document.location.search;
      for (var i = 0; i < ZFAdvLead.utmcustPNameArr.length; i++) {
        var zf_pN = ZFAdvLead.utmcustPNameArr[i];
        var zf_pV;
        if (zf_pN == 'referrername') {
          zf_pV = (document.URL || '').slice(0, 1500);
        } else {
          zf_pV = this.zfautm_gP(url_search, zf_pN);
          if (zf_pV == undefined || zf_pV == '') {
            zf_pV = this.zfautm_gC(zf_pN);
          }
        }
        if (typeof zf_pV !== 'undefined' && zf_pV !== null & zf_pV != '') {
          ZFAdvLead.utmPValObj[zf_pN] = zf_pV;
        }
      }
      for (var pkey in ZFAdvLead.utmPValObj) {
        this.zfautm_sC(pkey);
      }
    };
    ZFAdvLead.prototype.zfautm_bscPCap = function() {
      var trafSrc = this.zfautm_calcTrafSrc();
      if (trafSrc.source != '') {
        ZFAdvLead.utmPValObj.utm_source = trafSrc.source;
      }
      if (trafSrc.medium != '') {
        ZFAdvLead.utmPValObj.utm_medium = trafSrc.medium;
      }
      if (trafSrc.campaign != '') {
        ZFAdvLead.utmPValObj.utm_campaign = trafSrc.campaign;
      }
      if (trafSrc.term != '') {
        ZFAdvLead.utmPValObj.utm_term = trafSrc.term;
      }
      if (trafSrc.content != '') {
        ZFAdvLead.utmPValObj.utm_content = trafSrc.content;
      }
    };
    ZFAdvLead.prototype.zfautm_calcTrafSrc = function() {
      var u1 = '', u2 = '', u3 = '', u4 = '', u5 = '';
      var search_engines = [['bing', 'q'], ['google', 'q'], ['yahoo', 'q'], ['baidu', 'q'], ['yandex', 'q'], ['ask', 'q']];
      var ref = document.referrer;
      ref = ref.substr(ref.indexOf('//') + 2);
      var ref_domain = ref;
      var ref_path = '/';
      var ref_search = '';

      var url_search = document.location.search;
      if (url_search.indexOf('utm_source') > -1 || url_search.indexOf('utm_medium') > -1 || url_search.indexOf('utm_campaign') > -1 || url_search.indexOf('utm_term') > -1 || url_search.indexOf('utm_content') > -1) {
        u1 = this.zfautm_gP(url_search, 'utm_source');
        u2 = this.zfautm_gP(url_search, 'utm_medium');
        u3 = this.zfautm_gP(url_search, 'utm_campaign');
        u4 = this.zfautm_gP(url_search, 'utm_term');
        u5 = this.zfautm_gP(url_search, 'utm_content');
      } else if (this.zfautm_gP(url_search, 'gclid')) {
        u1 = 'Google Ads';
        u2 = 'cpc';
        u3 = '(not set)';
        if (!ZFAdvLead.utmcustPNameArr.includes('gclid')) {
          ZFAdvLead.utmcustPNameArr.push('gclid');
        }
      } else if (ref) {
        var r_u1 = this.zfautm_gC('utm_source');
        var r_u2 = this.zfautm_gC('utm_medium');
        var r_u3 = this.zfautm_gC('utm_campaign');
        var r_u4 = this.zfautm_gC('utm_term');
        var r_u5 = this.zfautm_gC('utm_content');
        if (typeof r_u1 === 'undefined' && typeof r_u2 === 'undefined' && typeof r_u3 === 'undefined' && typeof r_u4 === 'undefined' && typeof r_u5 === 'undefined') {
          if (ref.indexOf('/') > -1) {
            ref_domain = ref.substr(0, ref.indexOf('/'));
            ref_path = ref.substr(ref.indexOf('/'));
            if (ref_path.indexOf('?') > -1) {
              ref_search = ref_path.substr(ref_path.indexOf('?'));
              ref_path = ref_path.substr(0, ref_path.indexOf('?'));
            }
          }
          u2 = 'referral';
          u1 = ref_domain;
          for (var i = 0; i < search_engines.length; i++) {
            if (ref_domain.indexOf(search_engines[i][0]) > -1) {
              u2 = 'organic';
              u1 = search_engines[i][0];
              u4 = this.zfautm_gP(ref_search, search_engines[i][1]) || '(not provided)';
              break;
            }
          }
        } else {
          if (typeof r_u1 !== 'undefined') {
            u1 = r_u1;
          }
          if (typeof r_u2 !== 'undefined') {
            u2 = r_u2;
          }
          if (typeof r_u3 !== 'undefined') {
            u3 = r_u3;
          }
          if (typeof r_u4 !== 'undefined') {
            u4 = r_u4;
          }
          if (typeof r_u5 !== 'undefined') {
            u5 = r_u5;
          }
        }
      } else {
        var r2_u1 = this.zfautm_gC('utm_source');
        var r2_u2 = this.zfautm_gC('utm_medium');
        var r2_u3 = this.zfautm_gC('utm_campaign');
        var r2_u4 = this.zfautm_gC('utm_term');
        var r2_u5 = this.zfautm_gC('utm_content');
        if (typeof r2_u1 === 'undefined' && typeof r2_u2 === 'undefined' && typeof r2_u3 === 'undefined' && typeof r2_u4 === 'undefined' && typeof r2_u5 === 'undefined') {
          var locRef = document.URL;
          locRef = locRef.substr(locRef.indexOf('//') + 2);
          if (locRef.indexOf('/') > -1) {
            locRef = locRef.substr(0, locRef.indexOf('/'));
          }
          u1 = locRef;
          u2 = 'referral';
        } else {
          if (typeof r2_u1 !== 'undefined') {
            u1 = r2_u1;
          }
          if (typeof r2_u2 !== 'undefined') {
            u2 = r2_u2;
          }
          if (typeof r2_u3 !== 'undefined') {
            u3 = r2_u3;
          }
          if (typeof r2_u4 !== 'undefined') {
            u4 = r2_u4;
          }
          if (typeof r2_u5 !== 'undefined') {
            u5 = r2_u5;
          }
        }
      }
      return {
        source: u1,
        medium: u2,
        campaign: u3,
        term: u4,
        content: u5
      };
    };
    ZFAdvLead.prototype.zfautm_gP = function(s, q) {
      try {
        var match = s.match('[?&]' + q + '=([^&]+)');
        if (match) {
          if (match[1].length > 199) {
            var raw = decodeURIComponent(match[1]);
            raw = raw.replace(/[^A-Za-z0-9_]/g, '');
            return raw.slice(0, 199);
          } else {
            return decodeURIComponent(match[1]);
          }
        } else {
          return '';
        }
      } catch {
        return '';
      }
    };
    ZFAdvLead.prototype.zfautm_gC = function(cookieName) {
      var cookieArr = document.cookie.split('; ');
      for (var i = 0; i < cookieArr.length; i++) {
        var cookieVals = cookieArr[i].split('=');
        if (cookieVals[0] === cookieName && cookieVals[1]) {
          return decodeURIComponent(cookieVals[1]);
        }
      }
    };
    ZFAdvLead.prototype.zfautm_gC_enc = function(cookieName) {
      var cookieArr = document.cookie.split('; ');
      for (var i = 0; i < cookieArr.length; i++) {
        var cookieVals = cookieArr[i].split('=');
        if (cookieVals[0] === cookieName && cookieVals[1]) {
          return cookieVals[1];
        }
      }
    };
    ZFAdvLead.prototype.zfautm_iframeSprt = function() {
      var zf_frame = document.getElementsByTagName('iframe');
      for (var i = 0; i < zf_frame.length; ++i) {
        if ((zf_frame[i].src).indexOf('formperma') > 0) {
          var zf_src = zf_frame[i].src;
          for (var prmIdx = 0; prmIdx < ZFAdvLead.utmPNameArr.length; prmIdx++) {
            var utmPm = ZFAdvLead.utmPNameArr[prmIdx];
            utmPm = (ZFAdvLead.isSameDomain && (ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1)) ? 'zf_' + utmPm : utmPm;
            var utmPmregex = new RegExp('[?&]' + utmPm + '=');
            if (!utmPmregex.test(zf_src)) {
              var utmVal = this.zfautm_gC_enc(ZFAdvLead.utmPNameArr[prmIdx]);
              if (typeof utmVal !== 'undefined') {
                if (utmVal != '') {
                  if (zf_src.indexOf('?') > 0) {
                    zf_src = zf_src + '&' + utmPm + '=' + utmVal;
                  } else {
                    zf_src = zf_src + '?' + utmPm + '=' + utmVal;
                  }
                }
              }
            }
          }
          if (zf_frame[i].src.length < zf_src.length) {
            zf_frame[i].src = zf_src;
          }
        }
      }
    };
    ZFAdvLead.prototype.zfautm_DHtmlSprt = function() {
      var zf_formsArr = document.forms;
      for (var frmInd = 0; frmInd < zf_formsArr.length; frmInd++) {
        var zf_form_act = zf_formsArr[frmInd].action;
        if (zf_form_act && zf_form_act.indexOf('formperma') > 0) {
          for (var prmIdx = 0; prmIdx < ZFAdvLead.utmPNameArr.length; prmIdx++) {
            var utmPm = ZFAdvLead.utmPNameArr[prmIdx];
            var utmVal = this.zfautm_gC(ZFAdvLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== 'undefined') {
              if (utmVal != '') {
                var fieldObj = zf_formsArr[frmInd][utmPm];
                if (fieldObj) {
                  fieldObj.value = utmVal;
                }
              }
            }
          }
        }
      }
    };
    ZFAdvLead.prototype.zfautm_jsEmbedSprt = function() {
      document.getElementById('zforms_iframe_id').removeAttribute('onload');
      var jsEmbdFrm = document.getElementById('zforms_iframe_id');
      var embdSrc = jsEmbdFrm.src;
      for (var prmIdx = 0; prmIdx < ZFAdvLead.utmPNameArr.length; prmIdx++) {
        var utmPm = ZFAdvLead.utmPNameArr[prmIdx];
        utmPm = (ZFAdvLead.isSameDomain && (ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1)) ? 'zf_' + utmPm : utmPm;
        var utmVal = this.zfautm_gC_enc(ZFAdvLead.utmPNameArr[prmIdx]);
        if (typeof utmVal !== 'undefined') {
          if (utmVal != '') {
            if (embdSrc.indexOf('?') > 0) {
              embdSrc = embdSrc + '&' + utmPm + '=' + utmVal;
            } else {
              embdSrc = embdSrc + '?' + utmPm + '=' + utmVal;
            }
          }
        }
      }
      jsEmbdFrm.src = embdSrc;
    };

    var zfutm_zfAdvLead = new ZFAdvLead();
    zfutm_zfAdvLead.zfautm_ini();
    if (document.readyState === 'complete') {
      zfutm_zfAdvLead.zfautm_iframeSprt();
      zfutm_zfAdvLead.zfautm_DHtmlSprt();
    } else {
      window.addEventListener('load', function() {
        zfutm_zfAdvLead.zfautm_iframeSprt();
        zfutm_zfAdvLead.zfautm_DHtmlSprt();
      }, false);
    }

    window.zfutm_zfAdvLead = zfutm_zfAdvLead;
  }, []);

  // Push consultation_form_ec for thank-you conversion
  useEffect(() => {
    const formIds = ['form', 'cta-zoho-form'];
    const handler = (event) => {
      const formEl = event.target;
      const emailValue = formEl.querySelector('input[name="Email"]')?.value?.trim() || '';
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'consultation_form_ec',
          enhanced_conversion_data: { email: emailValue }
        });
      }
    };

    const attached = formIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    attached.forEach((form) => form.addEventListener('submit', handler));

    return () => {
      attached.forEach((form) => form.removeEventListener('submit', handler));
    };
  }, []);

  const clientLogos = [
    { src: '/clients/Binary.png', alt: 'Binary' },
    { src: '/clients/actualize.png', alt: 'Actualize' },
    { src: '/clients/carbonsirf.png', alt: 'Carbonsirf' },
    { src: '/clients/cotu.avif', alt: 'Cotu' },
    { src: '/clients/fuze.png', alt: 'Fuze' },
    { src: '/clients/growdash.png', alt: 'Growdash' },
    { src: '/clients/humlog.png', alt: 'Humlog' },
    { src: '/clients/veehive.png', alt: 'Veehive' },
    { src: '/clients/zywa.png', alt: 'Zywa' }
  ];

  const pushWhatsAppGtmClick = (href) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gtm.linkClick',
        'Click URL': href,
        'gtm.elementUrl': href,
        _triggers: '193123837_46' // matches GTM WA trigger regex
      });
    }
  };

  const challengePoints = [
    {
      icon: <FiAlertTriangle />,
      title: 'No Financial Visibility',
      description: 'Critical decisions without real-time data. Flying blind on cash runway and burn.'
    },
    {
      icon: <FiTrendingDown />,
      title: 'Fundraising Struggles',
      description: 'Investor meetings without robust models and metrics that VCs expect to see.'
    },
    {
      icon: <FiUserX />,
      title: 'Full-Time CFO Too Expensive',
      description: 'A full-time CFO costs AED 500K+/year — too much for a growing company.'
    },
    {
      icon: <FiShield />,
      title: 'Compliance Headaches',
      description: 'UAE VAT, corporate tax, and regulatory requirements piling up with tight deadlines.'
    }
  ];

  const cfoServices = [
    {
      icon: <FiBarChart2 />,
      title: 'Strategic FP&A',
      description: '3-way models, rolling forecasts, and scenario planning that guide hiring and GTM.',
      bullets: ['Monthly forecasting cadence', 'Hiring & runway scenarios', 'Board-ready KPI dashboards']
    },
    {
      icon: <FiFileText />,
      title: 'Investor & Board Reporting',
      description: 'Crisp monthly packs, variance analysis, cohort views, and data-room prep.',
      bullets: ['Board decks and commentary', 'MRR/ARR and unit economics', 'Data room & diligence support']
    },
    {
      icon: <FiShield />,
      title: 'Tax & Compliance',
      description: 'UAE corporate tax/VAT readiness, policies, and controls without slowing growth.',
      bullets: ['VAT and corporate tax reviews', 'Policies, controls, approvals', 'Audit & compliance liaison']
    },
    {
      icon: <FiZap />,
      title: 'Cash & Working Capital',
      description: 'Tight cash management, collections playbooks, and vendor terms negotiation.',
      bullets: ['13-week cashflow', 'Collections & billing process', 'Payables/FX optimization']
    },
    {
      icon: <FiUsers />,
      title: 'Finance Team & Systems',
      description: 'Build lean finance ops across tools, processes, and people.',
      bullets: ['Close acceleration & checklists', 'Tooling stack design & migration', 'Recruiting & training support']
    },
    {
      icon: <FiCheckCircle />,
      title: 'M&A & Fundraising',
      description: 'Models, materials, and diligence response so deals move faster.',
      bullets: ['Investor model + sensitivities', 'Q&A and data requests', 'Transaction support']
    }
  ];

  const whyChooseReasons = [
    {
      icon: <FiUsers />,
      title: 'Startup & VC Native',
      description: 'We speak founder, VC, and operator. 200+ UAE startups & portfolios served.'
    },
    {
      icon: <FiShield />,
      title: 'Big 4 + Scaleup DNA',
      description: 'Fractional CFOs from Deloitte/EY/PwC who have shipped at hypergrowth companies.'
    },
    {
      icon: <FiZap />,
      title: 'Fast Onboarding',
      description: '30-day playbook: close cleanup, dashboards live, forecast in circulation.'
    },
    {
      icon: <FiBriefcase />,
      title: 'Flexible Engagements',
      description: 'Start at 10–40 hours/month, scale up or down without headcount risk.'
    },
    {
      icon: <FiCheckCircle />,
      title: 'Always-On Access',
      description: 'WhatsApp/Slack/Email access to your CFO — no gatekeepers.'
    },
    {
      icon: <FiStar />,
      title: 'Outcome-Focused',
      description: 'Fundraising readiness, faster closes, and reliable reporting — not just accounting.'
    }
  ];

  const testimonials = [
    {
      quote:
        'Fast, friendly, and very professional. I love how communicative they were handling our Corporate tax registration.',
      name: 'Abdulla Al-Ogail',
      role: 'Co-founder & CEO, Olymon',
      avatar: '/Founders/abdulla.jpeg'
    },
    {
      quote:
        'Always very responsive, supportive, having a business mindset, providing visuals and on top of all that, open for feedback so they can keep improving. Very happy that I took the decision to work with them.',
      name: 'Szilvia Vitos',
      role: 'Founder, Livvity',
      avatar: '/Founders/szilvia.jpeg'
    },
    {
      quote:
        'They designed an accounting system tailor made to our needs & completely automated our finance operations just like they promised. They\'ve been super helpful for us to scale.',
      name: 'Jeremy Khatar',
      role: 'CEO, Ronin Global LLC, USA',
      avatar: '/Founders/jeremy.png'
    },
    {
      quote:
        'If you ever do any financial modeling/forecasting, I seriously can\'t recommend Finanshels enough. they are a dependable team of professionals who work hard to deliver results.',
      name: 'Bader Al Kazimi',
      role: 'Founder, Optimize App',
      avatar: '/Founders/bader.jpeg'
    },
    {
      quote:
        'I am extremely grateful for the exceptional service we received from Finanshels.com. We insurancehub.ae highly recommend their services to anyone seeking reliable and trustworthy Accounting Partner.',
      name: 'Jomon Ulahannan',
      role: 'Founder & CEO, INSURANCE HUB',
      avatar: '/Founders/jomon.jpg'
    },
    {
      quote: 'Super fast team and I can always depend on these guys...way to go',
      name: 'Pravin Rai',
      role: 'Founder & CEO, QuicKart',
      avatar: '/Founders/pravin.jpeg'
    },
    {
      quote:
        'Bookkeeping, a piece of cake with Finanshels! Sahal has been extremely helpful in managing the books! He makes sure its up-to-date and super clean! Sometimes, for advice, I refer to him as well and again, he has been super supportive and helpful to my needs!',
      name: 'Sapna Mulani',
      role: 'Sr Accountant, Growdash',
      avatar: '/Founders/sapna.jpg'
    },
    {
      quote:
        'They thoroughly understood our business processes and streamlined our accounting processes perfectly where our both in-house and outsourced accountants failed multiple times to streamline and structure our complex financial ops.',
      name: 'Meet Patel',
      role: 'Former COO, StudentHub & BAWES',
      avatar: '/Founders/themeetpatel.png'
    },
    {
      quote:
        'Excellent service. Finanshels has made the tax registration process fast and easy. Their communication is super prompt and clear. 5 stars!!',
      name: 'Tina Chugani',
      role: 'Managing Director, Proxis LLC',
      avatar: '/Founders/tina.jpeg'
    },
    {
      quote: 'The team was super responsive and the entire service was efficiently processed.',
      name: 'Usama Naeem',
      role: 'Co-founder, Qureos',
      avatar: '/Founders/usama.jpeg'
    }
  ];

  const scrollTestimonials = (direction) => {
    const container = testimonialsTrackRef.current;
    if (!container) return;

    const card = container.querySelector('.testimonial-card');
    const scrollAmount = card ? card.getBoundingClientRect().width + 24 : container.clientWidth;

    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  };

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      question: 'What is a Fractional CFO and how is it different from a full-time CFO?',
      answer:
        'A Fractional CFO provides the same strategic financial leadership as a full-time CFO but on a part-time basis (typically 10–40 hours/month). You get senior expertise without the AED 500k+ annual cost of a full-time hire.'
    },
    {
      question: 'How do your Virtual CFO Services work?',
      answer:
        'You get a dedicated CFO who works remotely with your team via weekly cadences, monthly reporting, and always-on channels (WhatsApp/Slack/email). We integrate with your existing tools for real-time visibility.'
    },
    {
      question: "What's included in your CFO Services packages?",
      answer:
        'Strategic FP&A, 3-way forecasting, board/investor reporting, tax/VAT compliance oversight, cash management, controls/policies, fundraising support, and data-room/diligence prep. We tailor scope to your stage.'
    },
    {
      question: 'Do you help with fundraising and investor relations?',
      answer:
        'Yes. We build investor-ready models, prepare decks/metrics, run scenarios, set up data rooms, and support diligence Q&A. We join investor calls as needed.'
    },
    {
      question: 'How quickly can you start?',
      answer:
        'Most engagements onboard in 1–2 weeks. Week 1: data access + diagnostics. Week 2: first reporting pack + 90-day finance roadmap.'
    },
    {
      question: 'Are you familiar with UAE tax and compliance requirements?',
      answer:
        'Absolutely. We cover UAE corporate tax, VAT, ESR, transfer pricing basics, and coordinate with auditors when needed to keep you compliant.'
    }
  ];

  return (
    <div className="new-homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="trust-badge">
              <span className="trust-dot" aria-hidden="true" />
              <span className="trust-text">Trusted by 200+ Founders & VCs in UAE</span>
            </div>
            
            <h1 className="hero-title">
              Expert <span className="highlight-green">Fractional CFO</span><br />
              Services in Dubai
            </h1>
            
            <p className="hero-description">
              Strategic financial leadership for startups, scale-ups, and VC-backed companies. Get enterprise-grade CFO expertise without the full-time cost — from fundraising support to financial operations.
            </p>
            
            <div className="hero-features">
              <div className="hero-feature">
                <FiCheckCircle className="feature-icon" />
                <div>
                  <strong>Strategic Financial Leadership</strong>
                </div>
              </div>
              <div className="hero-feature">
                <FiCheckCircle className="feature-icon" />
                <div>
                  <strong>Investor-Ready Reporting</strong>
                </div>
              </div>
              <div className="hero-feature">
                <FiCheckCircle className="feature-icon" />
                <div>
                  <strong>Flexible Engagement Models</strong>
                </div>
              </div>
            </div>
            
            <div className="hero-ctas">
              <a
                href="https://api.whatsapp.com/send/?phone=971521549572&text=Hi%20I%27d%20like%20a%20free%20consultation%20for%20CFO%20services&type=phone_number&app_absent=0"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Get Free Consultation
              </a>
              <a href="#services" className="btn-secondary">View CFO Services</a>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="final-consultation-form hero-consultation-form">
              <form
                action="https://forms.zohopublic.com/finanshelsllc/form/GetYourFreeAccountingConsultation/formperma/QCbszPbiYZx16ed2dttj_d614SUen1t8U5iXQVgng7U/htmlRecords/submit"
                name="form"
                id="form"
                method="POST"
                acceptCharset="UTF-8"
                encType="multipart/form-data"
                onSubmit={() => {
                  if (window.dataLayer) {
                    window.dataLayer.push({
                      event: 'form_submission',
                      form_name: 'hero_consultation_form',
                      form_location: 'hero_section',
                      form_type: 'accounting_consultation'
                    });
                  }
                  if (window.gtag) {
                    window.gtag('event', 'conversion', {
                      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL'
                    });
                  }
                }}
              >
                <input type="hidden" name="zf_referrer_name" value="" />
                <input type="hidden" name="zf_redirect_url" value="" />
                <input type="hidden" name="zc_gad" value="" />
                <input type="hidden" name="utm_source" value="" />
                <input type="hidden" name="utm_medium" value="" />
                <input type="hidden" name="utm_campaign" value="" />
                <input type="hidden" name="utm_term" value="" />
                <input type="hidden" name="utm_content" value="" />

                <h3 className="form-title">Get Your Free CFO Consultation</h3>
                <p className="form-subtitle">Book a 30-minute strategy call with our CFO experts. No obligation.</p>

                <div className="form-row">
                  <div className="form-field">
                    <label>First Name</label>
                    <input
                      type="text"
                      maxLength="255"
                      name="Name_First"
                      fieldType="7"
                      placeholder="John"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label>Last Name</label>
                    <input
                      type="text"
                      maxLength="255"
                      name="Name_Last"
                      fieldType="7"
                      placeholder="Smith"
                      className="form-input"
                    />
                  </div>
                </div>

                <label>
                  Email <em>*</em>
                </label>
                <input
                  type="text"
                  maxLength="255"
                  name="Email"
                  defaultValue=""
                  fieldType="9"
                  placeholder="john@company.com"
                  className="form-input"
                />

                <label>
                  Phone <em>*</em>
                </label>
                <input
                  type="text"
                  compname="PhoneNumber"
                  name="PhoneNumber_countrycode"
                  phoneFormat="1"
                  isCountryCodeEnabled="false"
                  maxLength="20"
                  defaultValue=""
                  fieldType="11"
                  id="international_PhoneNumber_countrycode"
                  placeholder="+971 00 000 0000"
                  className="form-input"
                />

                <label>
                  Company Name <em>*</em>
                </label>
                <input
                  type="text"
                  name="SingleLine1"
                  defaultValue=""
                  fieldType="1"
                  maxLength="255"
                  placeholder="Your Company LLC"
                  className="form-input"
                />

                <label>Job Title</label>
                <input
                  type="text"
                  name="SingleLine2"
                  defaultValue=""
                  fieldType="1"
                  maxLength="255"
                  placeholder="CEO / Founder"
                  className="form-input"
                />

                <button type="submit" className="form-submit">
                  <em>Submit</em>
                </button>
              </form>

              <p className="form-disclaimer">
                By submitting, you agree to receive communications. Your data is secure and will never be shared.
              </p>

            </div>
          </div>
        </div>

        <div className="hero-trust-row">
          <p className="trust-label">Trusted by leading UAE businesses</p>
          <div className="logo-list-wide">
            {clientLogos.map((logo) => (
              <div key={logo.alt} className="trust-logo">
                <img
                  src={logo.src}
                  alt={`${logo.alt} logo`}
                  className="trust-logo-image"
                  loading="lazy"
                  decoding="async"
                  height="28"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-value">200+</div>
            <div className="stat-label">Founders & VCs Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">4.9</div>
            <div className="stat-label">Client Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">$500M+</div>
            <div className="stat-label">Fundraising Supported</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Dubai-Based Support</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="content-container">
          <div className="section-header">
            <p className="section-eyebrow">THE CHALLENGE</p>
            <h2 className="section-title">
              Scaling Without Strategic Finance Is Risky
            </h2>
            <p className="section-subtitle">
              Most founders and portfolio companies struggle with financial operations. Here's what we hear every day.
            </p>
          </div>
          
          <div className="problem-grid">
            {challengePoints.map((problem, index) => (
              <div key={index} className="problem-card">
                <div className="problem-icon">{problem.icon}</div>
                <h3 className="problem-title">{problem.title}</h3>
                <p className="problem-description">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section" id="services">
        <div className="content-container services-wrapper">
          <div className="section-header centered">
            <p className="section-eyebrow">OUR SERVICES</p>
            <h2 className="section-title">
              CFO Services Built for Dubai's Tech Ecosystem
            </h2>
            <p className="section-subtitle">
              From seed-stage startups to established scale-ups, we provide the financial leadership you need to grow confidently.
            </p>
          </div>

          <div className="services-grid">
            {cfoServices.map((service, index) => (
              <div
                key={service.title}
                className={`service-card ${index === 0 || index === 5 ? 'service-card-glow' : ''}`}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-bullets">
                  {service.bullets.map((item) => (
                    <li key={item}>
                      <span className="bullet-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Section */}
      <section className="why-choose-section" id="why-finanshels">
        <div className="content-container why-choose-layout">
          <div className="why-left">
            <p className="section-eyebrow">WHY CHOOSE US</p>
            <h2 className="section-title">
              Financial Leadership That Scales With You
            </h2>
            <p className="section-subtitle">
              We're not just accountants pushing numbers. We're strategic partners who've helped 200+ companies raise capital, optimize operations, and achieve their growth targets.
            </p>

            <div className="quote-card">
              <p className="quote-text">
                “Finanshels transformed our finance function. We closed our Series A in 3 months with their support. They're an extension of our team.”
              </p>
              <div className="quote-author">
                <span className="author-badge">AK</span>
                <div className="author-meta">
                  <strong>Ahmed Khan</strong>
                  <span>CEO, TechStartup Dubai</span>
                </div>
              </div>
            </div>

            <div className="why-actions">
              <a
                className="btn-whatsapp"
                href="https://api.whatsapp.com/send/?phone=971521549572&text=Hi%20I%27d%20like%20a%20free%20consultation%20for%20CFO%20services&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                Get Free Consultation
              </a>
            </div>
          </div>

          <div className="why-right">
            <div className="reason-grid">
              {whyChooseReasons.map((reason, index) => (
                <div key={index} className="reason-card">
                  <div className="reason-icon">{reason.icon}</div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - CTO Redesign */}
      <section className="testimonials-section" id="reviews">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <span className="testimonials-label">CLIENT SUCCESS STORIES</span>
            <h2 className="testimonials-heading">
              Trusted by <span className="text-accent">5,000+ Businesses</span>
            </h2>
            <p className="testimonials-description">
              Don't just take our word for it. Here's what our clients say about working with Finanshels.
            </p>
          </div>
          
          <div className="testimonials-carousel">
            <button
              className="carousel-control carousel-control-prev"
              onClick={() => scrollTestimonials(-1)}
              aria-label="Previous testimonials"
            >
              <FiChevronLeft />
            </button>

            <div className="carousel-viewport" ref={testimonialsTrackRef}>
              <div className="carousel-track">
                {testimonials.map((testimonial, index) => (
                  <article key={index} className="testimonial">
                    <div className="testimonial-header">
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="rating-star" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="testimonial-content">
                      <p>{testimonial.quote}</p>
                    </blockquote>
                    
                    <footer className="testimonial-author">
                      <div className="author-image">
                        {testimonial.avatar ? (
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            loading="lazy"
                            decoding="async"
                            width="60"
                            height="60"
                          />
                        ) : (
                          <div className="author-initials">
                            {testimonial.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                          </div>
                        )}
                      </div>
                      <div className="author-info">
                        <cite className="author-name">{testimonial.name}</cite>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            </div>

            <button
              className="carousel-control carousel-control-next"
              onClick={() => scrollTestimonials(1)}
              aria-label="Next testimonials"
            >
              <FiChevronRight />
            </button>
          </div>

          <div className="trustpilot-widget">
            <div className="trustpilot-content">
              <div className="trustpilot-stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="trustpilot-star" />
                ))}
              </div>
              <div className="trustpilot-text">
                <strong>4.9/5</strong> on Trustpilot Reviews
              </div>
              <div className="trustpilot-count">239 reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="content-container">
          <div className="section-header centered">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about our CFO services in Dubai.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <FiChevronDown className={`faq-icon ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gradient CTA Panel */}
      <section className="gradient-cta">
        <div className="gradient-cta-card">
          <p className="section-eyebrow">CFO ON-DEMAND</p>
          <h2 className="gradient-cta-title">
            Ready to Transform Your <span className="highlight-cta">Financial Operations?</span>
          </h2>
          <p className="gradient-cta-subtitle">
            Join 200+ founders and VCs who trust Finanshels for their CFO needs. Book your free 30-minute strategy call today.
          </p>
          <a href="#consultation" className="btn-primary gradient-cta-btn">
            Get Free Consultation →
          </a>
          <p className="gradient-cta-note">No commitment required • Response within 24 hours</p>
        </div>
      </section>

    </div>
  );
};

export default Home;
