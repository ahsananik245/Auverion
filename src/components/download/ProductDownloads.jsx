import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import {
  RELEASE_VERSION, RELEASE_DATE, DOWNLOAD_URL,
  REVIN_DOWNLOAD_URL, REVIN_INSTALLER_PUBLISHED, RELEASE_PAGE_URL,
} from '../../config/download';
import './ProductDownloads.css';

// Two real products in the Auverion suite. Revin is featured. Each entry is a
// genuine installer with a real download link -- no placeholder "editions".
const products = [
  {
    name: 'Revin — AI Assistant for Revit',
    tagline: 'Offline AI that models and documents Revit from plain language.',
    version: RELEASE_VERSION,
    date: RELEASE_DATE,
    status: 'stable',
    os: 'Windows 64-bit',
    supports: 'Autodesk Revit 2022 - 2026',
    featured: true,
    // Direct download once the ~2 GB installer is uploaded to the release;
    // until then, send visitors to the release page.
    href: REVIN_INSTALLER_PUBLISHED ? REVIN_DOWNLOAD_URL : RELEASE_PAGE_URL,
    cta: REVIN_INSTALLER_PUBLISHED ? 'Download Installer (.exe)' : 'Go to Releases',
    learnMore: '/products/revin',
  },
  {
    name: 'RebarX — Plugin for Revit',
    tagline: 'Automated structural reinforcement detailing from ETABS.',
    version: RELEASE_VERSION,
    date: RELEASE_DATE,
    status: 'stable',
    os: 'Windows 64-bit',
    supports: 'Autodesk Revit 2019 - 2026',
    featured: false,
    href: DOWNLOAD_URL,
    cta: 'Download Installer (.exe)',
    learnMore: '/products/rebarx',
  },
];

const ProductDownloads = () => {
  return (
    <section className="product-downloads">
      <div className="container">
        <div className="pd-container">
          {products.map((p) => (
            <div className={`pd-card ${p.featured ? 'pd-card--featured' : ''}`} key={p.name}>
              <div className="pd-left">
                <div className="pd-badge-row">
                  {p.featured && <span className="pd-badge featured">Featured</span>}
                  <span className={`pd-badge ${p.status}`}>
                    {p.status === 'stable' ? 'Stable Release' : 'Beta Preview'}
                  </span>
                  <span className="pd-badge os">{p.os}</span>
                </div>
                <h3 className="pd-title">{p.name}</h3>
                <p className="pd-tagline">{p.tagline}</p>
                <div className="pd-meta">
                  Version {p.version} &bull; Released {p.date} &bull; {p.supports}
                </div>
              </div>
              <div className="pd-right">
                <Button as="a" href={p.href} variant="primary" size="large">
                  {p.cta}
                </Button>
                <Link to={p.learnMore} className="pd-learn-more">Learn more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDownloads;
