import React from 'react';
import SEO from '../components/seo/SEO';
import DownloadHero from '../components/download/DownloadHero';
import ProductDownloads from '../components/download/ProductDownloads';
import SystemRequirements from '../components/download/SystemRequirements';
import ChecksumVerification from '../components/download/ChecksumVerification';

const Download = () => {
  return (
    <>
      <SEO
        title="Download — Auverion Suite for Revit"
        description="Download the Auverion suite for Revit: Revin, an offline AI assistant that automates modeling and documentation, and RebarX for structural reinforcement detailing. Windows 64-bit."
      />
      <main>
        <DownloadHero />
        <ProductDownloads />
        <ChecksumVerification />
        <SystemRequirements />
      </main>
    </>
  );
};

export default Download;
