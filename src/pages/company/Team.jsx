import React from 'react';
import SEO from '../../components/seo/SEO';
import TeamHero from '../../components/company/TeamHero';
import TeamContent from '../../components/company/TeamContent';

const Team = () => {
  return (
    
    <>
      <SEO title="Team" description="Meet the engineering and leadership team behind Auverion." />
      <main>
      <TeamHero />
      <TeamContent />
    </main>
    </>
  );
};

export default Team;



