import React from 'react';
import SEO from '../../components/seo/SEO';
import PartnersHero from '../../components/company/PartnersHero';
import PartnersContent from '../../components/company/PartnersContent';

const Partners = () => {
  return (
    
    <>
      <SEO title="Partners" description="Join the Auverion Partner Program. Technology, consulting, and reseller partnerships." />
      <main>
      <PartnersHero />
      <PartnersContent />
    </main>
    </>
  );
};

export default Partners;



