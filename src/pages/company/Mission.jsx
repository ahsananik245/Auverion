import React from 'react';
import SEO from '../../components/seo/SEO';
import MissionHero from '../../components/company/MissionHero';
import MissionContent from '../../components/company/MissionContent';

const Mission = () => {
  return (
    
    <>
      <SEO title="Mission" description="Auverion's mission to eliminate manual rework in structural reinforcement engineering." />
      <main>
      <MissionHero />
      <MissionContent />
    </main>
    </>
  );
};

export default Mission;



