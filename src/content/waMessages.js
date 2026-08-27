// WhatsApp prefill copy for the CFO landing page.
// Source of truth: the "CFO Services" row of the approved WhatsApp message sheet.
// These strings are verbatim — do not reword them without updating the sheet.
export const WA_MESSAGES = {
  google: 'Hi, I saw your Google ad for CFO Services. Can you share details?',
  seo: 'Hi, I found you for CFO Services. Can you share details?',
  bing: 'Hi, I saw your Bing ad for CFO Services. Can you share details?',
};

export const WA_PHONE = '971521549572';

const DEFAULT_CHANNEL = 'seo';
const CHANNEL_STORAGE_KEY = 'fs_wa_channel';
const PAID_MEDIUMS = ['cpc', 'ppc', 'paid', 'paidsearch', 'paid_search'];

const isKnownChannel = (value) =>
  typeof value === 'string' && Object.hasOwn(WA_MESSAGES, value);

// sessionStorage throws in some privacy modes and embedded webviews. A failed
// read/write is not an error worth surfacing — it just means we fall back to
// detecting the channel from the current URL, or to the SEO default.
const readStoredChannel = () => {
  try {
    const stored = sessionStorage.getItem(CHANNEL_STORAGE_KEY);
    return isKnownChannel(stored) ? stored : null;
  } catch {
    return null;
  }
};

const storeChannel = (channel) => {
  try {
    sessionStorage.setItem(CHANNEL_STORAGE_KEY, channel);
  } catch {
    // First-touch channel simply will not survive in-app navigation.
  }
};

// Returns a channel only when the URL carries a real paid-traffic signal,
// so an organic visit is never mislabelled as an ad click.
const detectChannel = (pathname, search) => {
  const params = new URLSearchParams(search);
  const path = pathname.toLowerCase();
  const source = (params.get('utm_source') || '').toLowerCase();
  const isPaid = PAID_MEDIUMS.includes((params.get('utm_medium') || '').toLowerCase());

  if (params.has('msclkid') || path.startsWith('/bing') || (isPaid && source.includes('bing'))) {
    return 'bing';
  }
  if (params.has('gclid') || path.startsWith('/google') || (isPaid && source.includes('google'))) {
    return 'google';
  }
  return null;
};

// First touch wins: an ad click that later navigates to /thank-you keeps its
// ad message, because the query string is gone by then.
export const resolveWhatsAppChannel = ({ pathname = '', search = '' } = {}) => {
  const detected = detectChannel(pathname, search);
  if (detected) {
    storeChannel(detected);
    return detected;
  }
  return readStoredChannel() || DEFAULT_CHANNEL;
};

export const buildWhatsAppHref = (channel) => {
  const params = new URLSearchParams({
    phone: WA_PHONE,
    text: WA_MESSAGES[channel] ?? WA_MESSAGES[DEFAULT_CHANNEL],
    type: 'phone_number',
    app_absent: '0',
  });
  return `https://api.whatsapp.com/send/?${params.toString()}`;
};
