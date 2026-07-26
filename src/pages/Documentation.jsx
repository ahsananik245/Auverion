import React from 'react';
import SEO from '../components/seo/SEO';
import DocumentationHero from '../components/documentation/DocumentationHero';
import DocumentationContent from '../components/documentation/DocumentationContent';

const Documentation = () => {
  return (
    
    <>
      <SEO title="Documentation" description="Revin user manual and guides for the Auverion suite — installation, license activation, usage, and troubleshooting for the offline AI Revit assistant." />
      <main>
      <DocumentationHero />
      <DocumentationContent />
    </main>
    </>
  );
};

export default Documentation;



