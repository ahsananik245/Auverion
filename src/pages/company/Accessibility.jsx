import React from 'react';
import SEO from '../../components/seo/SEO';
import AccessibilityHero from '../../components/company/AccessibilityHero';
import AccessibilityContent from '../../components/company/AccessibilityContent';

const Accessibility = () => {
  return (
    
    <>
      <SEO title="Accessibility" description="Auverion's commitment to digital accessibility and WCAG 2.1 AA compliance." />
      <main>
      <AccessibilityHero />
      <AccessibilityContent />
    </main>
    </>
  );
};

export default Accessibility;



