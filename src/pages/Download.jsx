import React from 'react';
import SEO from '../components/seo/SEO';
import DownloadHero from '../components/download/DownloadHero';
import WaitlistForm from '../components/download/WaitlistForm';

const Download = () => {
  return (
    
    <>
      <SEO title="Get Early Access" description="RebarX is currently in closed beta. Join the waitlist to secure your spot for early access." />
      <main>
      <DownloadHero />
      <WaitlistForm />
    </main>
    </>
  );
};

export default Download;
