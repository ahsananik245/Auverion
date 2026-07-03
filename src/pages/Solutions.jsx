import React from 'react';
import SEO from '../components/seo/SEO';
import SolutionsHero from '../components/solutions/SolutionsHero';
import SolutionsContent from '../components/solutions/SolutionsContent';

const Solutions = () => {
  return (
    
    <>
      <SEO title="Solutions" description="Discover how Auverion software solves real-world challenges for structural engineering teams." />
      <main>
      <SolutionsHero />
      <SolutionsContent />
    </main>
    </>
  );
};

export default Solutions;



