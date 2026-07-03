import React from 'react';
import SEO from '../../components/seo/SEO';
import CareersHero from '../../components/company/CareersHero';
import CareersContent from '../../components/company/CareersContent';

const Careers = () => {
  return (
    
    <>
      <SEO title="Careers" description="Join the Auverion team. View open positions in engineering, design, and operations." />
      <main>
      <CareersHero />
      <CareersContent />
    </main>
    </>
  );
};

export default Careers;



