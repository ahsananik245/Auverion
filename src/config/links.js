// Central config for external links used across the site.
// Update these in one place instead of hunting through components.

// Lemon Squeezy checkout for the Professional Suite plan.
export const REBARX_CHECKOUT_URL =
  'https://auverion0.lemonsqueezy.com/checkout/buy/fe0177a8-0487-4799-bc4f-1e2cbab644c3';

// Formspree endpoint (legacy email-based form, no account required).
// NOTE: this is a temporary/stopgap endpoint per your Gmail address.
// The first real submission from the LIVE site will trigger a one-time
// confirmation email from Formspree -- click it or all later submissions
// will silently fail to deliver. Formspree is also phasing this legacy
// email-URL style out in favor of dashboard-created forms
// (https://formspree.io/f/{form_id}) -- swap this out once you create a
// proper account there.
export const FORMSPREE_ENDPOINT = 'https://formspree.io/ahasanhabibanik1001@gmail.com';
