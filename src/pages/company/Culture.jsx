import React from 'react';
import SEO from '../../components/seo/SEO';
import CultureHero from '../../components/company/CultureHero';
import CultureContent from '../../components/company/CultureContent';

const Culture = () => {
  return (
    
    <>
      <SEO title="Culture" description="Our values, work environment, and what it's like to build the future of structural engineering." />
      <main>
      <CultureHero />
      <CultureContent />
    </main>
    </>
  );
};

export default Culture;



