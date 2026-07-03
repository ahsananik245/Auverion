import React from 'react';
import SEO from '../components/seo/SEO';
import SupportHero from '../components/support/SupportHero';
import SupportContent from '../components/support/SupportContent';

const Support = () => {
  return (
    
    <>
      <SEO title="Support" description="Get help with Auverion products. Access knowledge base, submit tickets, and contact support." />
      <main>
      <SupportHero />
      <SupportContent />
    </main>
    </>
  );
};

export default Support;



