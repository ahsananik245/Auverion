import React from 'react';
import SEO from '../components/seo/SEO';
import DocumentationHero from '../components/documentation/DocumentationHero';
import DocumentationContent from '../components/documentation/DocumentationContent';

const Documentation = () => {
  return (
    
    <>
      <SEO title="Documentation" description="Browse guides, API references, and tutorials for the Auverion engineering software suite." />
      <main>
      <DocumentationHero />
      <DocumentationContent />
    </main>
    </>
  );
};

export default Documentation;



