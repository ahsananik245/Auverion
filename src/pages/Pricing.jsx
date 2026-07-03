import React from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingTiers from '../components/pricing/PricingTiers';
import FAQ from '../components/home/FAQ';

const pricingFaqs = [
  {
    q: 'Can I switch from a Monthly to an Annual plan?',
    a: 'Yes, you can upgrade to an annual plan at any time from your account dashboard. The remaining balance of your monthly subscription will be prorated.'
  },
  {
    q: 'How do floating network licenses work?',
    a: 'Floating licenses allow you to install the Auverion Suite on an unlimited number of workstations. A centralized license server (either hosted on your local network or in our cloud) manages the concurrent active users based on the number of seats you have purchased.'
  },
  {
    q: 'Do I get access to future products like FoundationX?',
    a: 'Yes. Both the Professional and Enterprise tiers grant you access to the entire Auverion Suite, including all future product releases and beta access programs, as long as your subscription is active.'
  },
  {
    q: 'Is technical support included?',
    a: 'All paid plans include standard email support with a 24-hour SLA. Enterprise plans include a dedicated Customer Success Manager, prioritized ticket routing, and live video troubleshooting sessions.'
  }
];

const Pricing = () => {
  return (
    <main>
      <PricingHero />
      <PricingTiers />
      <FAQ faqsData={pricingFaqs} />
    </main>
  );
};

export default Pricing;

