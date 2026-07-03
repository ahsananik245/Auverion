import React from 'react';
import SEO from '../components/seo/SEO';
import HeroSection from '../components/home/HeroSection';
import TrustedBySection from '../components/home/TrustedBySection';
import PipelineWorkflow from '../components/home/PipelineWorkflow';
import FeatureOverview from '../components/home/FeatureOverview';
import SoftwarePreview from '../components/home/SoftwarePreview';
import BenefitsStats from '../components/home/BenefitsStats';
import FAQ from '../components/home/FAQ';

const Home = () => {
  return (
    <>
      <SEO 
        title="" 
        description="Auverion builds next-generation structural engineering software, helping engineers automate workflows and design with confidence." 
      />
      <main>
        <HeroSection />
        <TrustedBySection />
        <PipelineWorkflow />
        <FeatureOverview />
        <SoftwarePreview />
        <BenefitsStats />
        <FAQ />
      </main>
    </>
  );
};

export default Home;
