import React from 'react';
import SEO from '../../components/seo/SEO';
import PressHero from '../../components/company/PressHero';
import PressContent from '../../components/company/PressContent';

const Press = () => {
  return (
    
    <>
      <SEO title="Press" description="Latest news, press releases, and media resources from Auverion." />
      <main>
      <PressHero />
      <PressContent />
    </main>
    </>
  );
};

export default Press;



