import React from 'react';
import SEO from '../../components/seo/SEO';
import AboutHero from '../../components/company/AboutHero';
import AboutContent from '../../components/company/AboutContent';

const About = () => {
  return (
    
    <>
      <SEO title="About Us" description="The story behind Auverion — founded by engineers, built for engineers." />
      <main>
      <AboutHero />
      <AboutContent />
    </main>
    </>
  );
};

export default About;



