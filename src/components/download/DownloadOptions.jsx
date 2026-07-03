import React from 'react';
import './DownloadOptions.css';

const DownloadOptions = () => {
  return (
    <section className="download-options">
      <div className="container">
        
        <h3 className="do-section-title">Other Download Options</h3>
        
        <div className="do-grid">
          
          <a href="#" className="do-card">
            <svg className="do-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
            <h4 className="do-card-title">Standard Installer (.exe)</h4>
            <p className="do-card-desc">Recommended for most users. Requires an active internet connection to download dependencies.</p>
            <div className="do-card-footer">
              Download <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </a>
          
          <a href="#" className="do-card">
            <svg className="do-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <h4 className="do-card-title">Offline Installer</h4>
            <p className="do-card-desc">For organizations without internet access. Includes all dependencies in a single large package.</p>
            <div className="do-card-footer">
              Download (2.1 GB) <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </a>
          
          <a href="#" className="do-card">
            <svg className="do-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            <h4 className="do-card-title">Portable Package (.zip)</h4>
            <p className="do-card-desc">For testing or evaluation. Does not require administrative privileges. Not recommended for production.</p>
            <div className="do-card-footer">
              Download ZIP <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </a>
          
        </div>
        
      </div>
    </section>
  );
};

export default DownloadOptions;
