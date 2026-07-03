import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, type = 'website', image }) => {
  const siteTitle = 'Auverion';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDesc = 'Auverion builds next-generation structural engineering software, helping engineers automate workflows and design with confidence.';
  const metaDesc = description || defaultDesc;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const metaCanonical = canonical || currentUrl;
  const defaultImage = '/og-image.jpg'; // Placeholder for default OG image
  const ogImage = image || defaultImage;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={metaCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metaCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
