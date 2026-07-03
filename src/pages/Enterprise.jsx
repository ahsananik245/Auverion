import React from 'react';
import SEO from '../components/seo/SEO';
import EnterpriseHero from '../components/enterprise/EnterpriseHero';
import EnterpriseContent from '../components/enterprise/EnterpriseContent';

const Enterprise = () => {
  return (
    
    <>
      <SEO title="Enterprise" description="Enterprise-grade structural engineering automation with dedicated support, SSO, and compliance." />
      <main>
      <EnterpriseHero />
      <EnterpriseContent />
    </main>
    </>
  );
};

export default Enterprise;



