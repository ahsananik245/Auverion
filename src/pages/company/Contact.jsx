import React from 'react';
import SEO from '../../components/seo/SEO';
import ContactHero from '../../components/company/ContactHero';
import ContactContent from '../../components/company/ContactContent';

const Contact = () => {
  return (
    
    <>
      <SEO title="Contact" description="Get in touch with the Auverion team for sales, support, or partnership inquiries." />
      <main>
      <ContactHero />
      <ContactContent />
    </main>
    </>
  );
};

export default Contact;



