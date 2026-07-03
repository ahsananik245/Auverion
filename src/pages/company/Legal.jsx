import React from 'react';
import SEO from '../../components/seo/SEO';
import LegalHero from '../../components/company/LegalHero';
import LegalContent from '../../components/company/LegalContent';

const Legal = () => {
  return (
    
    <>
      <SEO title="Legal" description="Auverion's Terms of Service, Privacy Policy, and Cookie Policy." />
      <main>
      <LegalHero />
      <LegalContent />
    </main>
    </>
  );
};

export default Legal;



