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
        title="Install RebarX — Revit Plugin"
        description="Install the RebarX Revit plugin to automate column and beam rebar detailing from ETABS design results directly inside Revit. Free 14-day trial."
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
