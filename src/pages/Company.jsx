import React from 'react';
import SEO from '../components/seo/SEO';
import CompanyHero from '../components/company/CompanyHero';
import CompanyContent from '../components/company/CompanyContent';

const Company = () => {
  return (
    
    <>
      <SEO title="Company" description="Learn about Auverion's mission to transform structural engineering through automation software." />
      <main>
      <CompanyHero />
      <CompanyContent />
    </main>
    </>
  );
};

export default Company;



