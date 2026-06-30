# Conversion Tracking

How the Google Ads consultation conversion is tracked on the Finanshels CFO site,
why it works the way it does, and how to verify it in GTM Preview.

## Intended event flow

GTM container: `GTM-MXFJ6CGB`. The Google Ads conversion tag is triggered by the
**`consultation_form_ec` Custom Event** — nothing else.

1. **Landing page (`/`)** — visitor fills in the hero consultation form (`#form`)
   and submits.
   - `index.html` pushes `zf_submitform` (accurate: the form was submitted) and
     saves the email + a one-shot `consultation_submitted` flag to
     `sessionStorage`.
   - `Home.jsx` pushes `form_submission` (analytics metadata only).
   - The form POSTs to Zoho, which redirects to `/thank-you`
     (`zf_redirect_url` is set to `${origin}/thank-you`).
2. **Thank-you page (`/thank-you`)** — `ThankYou.jsx` runs on load:
   - pushes `thank_you_page_view`, and
   - **only if `consultation_submitted` is set**, pushes `consultation_form_ec`
     with `enhanced_conversion_data.email` / `user_data.email`, then clears the
     flag.

So the conversion fires exactly once, on the thank-you page, for confirmed
submissions only.

## Root cause of the previous bug

`consultation_form_ec` was pushed at **submit time on the landing page**, in two
places:

- `index.html` — an interval-bound submit listener pushed it immediately on submit.
- `Home.jsx` — a `useEffect` submit listener pushed it **again** on submit.

There was also a leftover `gtag('event','conversion', { send_to:
'AW-CONVERSION_ID/CONVERSION_LABEL' })` placeholder in the form's inline
`onSubmit`.

Firing on submit is unreliable: the submit can fail client-side validation, and
the navigation away to Zoho can cut the tag off before it sends — so the
conversion fired on the landing page (or not at all) instead of on the
thank-you page.

## The fix

- **`index.html`** — replaced the `consultation_form_ec` push with a capture-phase
  `submit` listener scoped to the consultation form ids (`form`, `cta-zoho-form`).
  It pushes `zf_submitform` and saves the email + `consultation_submitted` flag to
  `sessionStorage`. No conversion event is emitted here anymore.
- **`src/pages/Home.jsx`** — deleted the duplicate `consultation_form_ec`
  `useEffect`, and removed the dead placeholder `gtag` conversion call. The inline
  `onSubmit` still pushes `form_submission` for analytics.
- **`src/pages/ThankYou.jsx`** — on load pushes `thank_you_page_view`, and (only
  when `consultation_submitted` is set) pushes `consultation_form_ec` with
  enhanced conversion data, then clears the flag.

### Why sessionStorage

The email lives in the form on the landing page, but Enhanced Conversions need it
at conversion time on the thank-you page. Same-origin `sessionStorage` survives the
Zoho redirect (`finanshels.com` → Zoho → back to `/thank-you`) in the same tab.
Clearing the flag after firing means a refresh, or a direct/bookmarked visit to
`/thank-you`, never double-counts.

No GTM container changes are needed — the conversion still fires off the same
`consultation_form_ec` event; only the page that emits it moved.

## Verify in GTM Preview

1. Submit a landing-page form → `consultation_form_ec` and the Google Ads
   conversion should **not** fire on the landing page (only `zf_submitform` and
   `form_submission`).
2. On `/thank-you` → `consultation_form_ec` and the conversion fire **once**, with
   the email populated.
3. Refresh `/thank-you` → the conversion must **not** re-fire.
4. Open `/thank-you` directly (no submission) → the conversion must **not** fire.

### One thing to confirm on the GTM side

Make sure the Google Ads conversion tag's trigger is the `consultation_form_ec`
Custom Event **only** — not "All Pages", not a Click trigger, and not
`zf_submitform`. If it has any of those, it would still fire on the landing page
regardless of this code change.
