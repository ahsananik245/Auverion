import React from 'react';
import Button from '../ui/Button';
import './ProductDownloads.css';

const downloads = [
  {
    name: 'RebarX Plugin for Revit',
    version: 'v1.2.4',
    date: 'June 2026',
    status: 'stable',
    os: 'Windows 64-bit'
  },
  {
    name: 'FoundationX',
    version: 'v1.0.1',
    date: 'May 2026',
    status: 'stable',
    os: 'Windows 64-bit'
  },
  {
    name: 'SteelX',
    version: 'v0.9.2-beta',
    date: 'July 2026',
    status: 'beta',
    os: 'Windows 64-bit'
  },
  {
    name: 'Auverion License Manager',
    version: 'v2.1.0',
    date: 'January 2026',
    status: 'stable',
    os: 'Windows / Linux Server'
  }
];

const ProductDownloads = () => {
  return (
    <section className="product-downloads">
      <div className="container">
        <div className="pd-container">
          
          {downloads.map((item, index) => (
            <div className="pd-card" key={index}>
              <div className="pd-left">
                <div className="pd-badge-row">
                  <span className={`pd-badge ${item.status}`}>
                    {item.status === 'stable' ? 'Stable Release' : 'Beta Preview'}
                  </span>
                  <span className="pd-badge os">{item.os}</span>
                </div>
                <h3 className="pd-title">{item.name}</h3>
                <div className="pd-meta">
                  Version {item.version} &bull; Released {item.date} &bull; <span className="disabled" style={{opacity: 0.7}}>Release Notes (Coming Soon)</span>
                </div>
              </div>
              <div className="pd-right">
                <Button variant="primary" size="large">Download MSI</Button>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default ProductDownloads;
