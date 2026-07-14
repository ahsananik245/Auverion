import React from 'react';
import Button from '../ui/Button';
import { RELEASE_VERSION, RELEASE_DATE, DOWNLOAD_URL } from '../../config/download';
import './ProductDownloads.css';

// Single real, current release. Deliberately not a list of multiple
// "editions" or fictional companion products -- Auverion currently
// ships exactly one installer (built by build_installer.bat from the
// Inno Setup script in /installer). If/when real additional products
// or editions exist, add them here as genuine entries, each with a
// real version and a real download link -- not placeholders.
const download = {
  name: 'RebarX Plugin for Revit',
  version: RELEASE_VERSION,
  date: RELEASE_DATE,
  status: 'stable',
  os: 'Windows 64-bit',
  supports: 'Autodesk Revit 2019 - 2026',
};

const ProductDownloads = () => {
  return (
    <section className="product-downloads">
      <div className="container">
        <div className="pd-container">
          <div className="pd-card">
            <div className="pd-left">
              <div className="pd-badge-row">
                <span className={`pd-badge ${download.status}`}>
                  {download.status === 'stable' ? 'Stable Release' : 'Beta Preview'}
                </span>
                <span className="pd-badge os">{download.os}</span>
              </div>
              <h3 className="pd-title">{download.name}</h3>
              <div className="pd-meta">
                Version {download.version} &bull; Released {download.date} &bull; {download.supports}
              </div>
            </div>
            <div className="pd-right">
              <Button as="a" href={DOWNLOAD_URL} variant="primary" size="large">
                Download Installer (.exe)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDownloads;
