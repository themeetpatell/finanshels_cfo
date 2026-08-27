import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { brand } from '../content/countries';
import { WA_PHONE, buildWhatsAppHref, resolveWhatsAppChannel } from '../content/waMessages';

const FloatingContacts = () => {
  const phoneHref = brand.phone.replace(/\s+/g, '');
  const { pathname, search } = useLocation();

  const whatsAppChannel = useMemo(
    () => resolveWhatsAppChannel({ pathname, search }),
    [pathname, search]
  );
  const whatsAppHref = useMemo(() => buildWhatsAppHref(whatsAppChannel), [whatsAppChannel]);

  const pushWhatsAppGtmClick = (href) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gtm.linkClick',
        'Click URL': href,
        'gtm.elementUrl': href,
        _triggers: '193123837_46' // matches GTM trigger regex
      });
    }
  };

  return (
    <div className="floating-contacts" aria-label="Contact options">
      <a
        className="contact-btn whatsapp data-wa-track"
        href={whatsAppHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={() => {
          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'whatsapp_click',
              button_location: 'floating_button',
              button_text: 'WhatsApp',
              whatsapp_channel: whatsAppChannel,
              phone_number: WA_PHONE
            });
          }
          pushWhatsAppGtmClick(`https://api.whatsapp.com/send/?phone=${WA_PHONE}`);
        }}
      >
        <FaWhatsapp className="contact-icon" />
      </a>
      <a
        className="contact-btn phone"
        href={`tel:${phoneHref}`}
        aria-label="Call us"
        onClick={() => {
          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'phone_call_click',
              button_location: 'floating_button',
              button_text: 'Call us',
              phone_number: phoneHref
            });
          }
        }}
      >
        <FiPhoneCall className="contact-icon" />
      </a>
    </div>
  );
};

export default FloatingContacts;
