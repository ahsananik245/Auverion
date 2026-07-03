import React from 'react';
import './LatestRelease.css';

const LatestRelease = () => {
  return (
    <section className="latest-release">
      <div className="container">
        
        <div className="lr-container">
          <div className="lr-left">
            <div className="lr-card">
              <h3 className="lr-title">Version Information</h3>
              <div className="lr-version-details">
                <div className="lr-detail-row">
                  <span className="lr-detail-label">Current Version</span>
                  <span className="lr-detail-value">v1.8.2</span>
                </div>
                <div className="lr-detail-row">
                  <span className="lr-detail-label">Build Number</span>
                  <span className="lr-detail-value">2026.10.12.441</span>
                </div>
                <div className="lr-detail-row">
                  <span className="lr-detail-label">Release Date</span>
                  <span className="lr-detail-value">October 12, 2026</span>
                </div>
                <div className="lr-detail-row">
                  <span className="lr-detail-label">Channel</span>
                  <span className="lr-detail-value">Stable</span>
                </div>
                <div className="lr-detail-row">
                  <span className="lr-detail-label">Installer Size</span>
                  <span className="lr-detail-value">428 MB</span>
                </div>
                <div className="lr-detail-row">
                  <span className="lr-detail-label">SHA-256</span>
                  <span className="lr-detail-value" style={{fontFamily: 'monospace'}}>8f434346...</span>
                </div>
                <div className="lr-detail-row">
                  <span className="lr-detail-label">Min Requirements</span>
                  <span className="lr-detail-value">Win 10, 8GB RAM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lr-right">
            <div className="lr-card">
              <h3 className="lr-title">What's New in v1.8.2</h3>
              
              <div className="lr-scroll-area">
                <div className="lr-update-item">
                  <div className="lr-update-type type-new">New</div>
                  <div className="lr-update-content">
                    <h4>Automated Splice Staggering</h4>
                    <p>Added a new algorithmic option to automatically stagger column splice locations across multiple stories to comply with ACI 318-19 seismic requirements.</p>
                  </div>
                </div>
                
                <div className="lr-update-item">
                  <div className="lr-update-type type-improved">Improved</div>
                  <div className="lr-update-content">
                    <h4>ETABS Import Speed</h4>
                    <p>Optimized the API bridge for ETABS v21, resulting in a 40% reduction in import times for models exceeding 50 stories.</p>
                  </div>
                </div>
                
                <div className="lr-update-item">
                  <div className="lr-update-type type-fixed">Fixed</div>
                  <div className="lr-update-content">
                    <h4>BVBS Export Artifacts</h4>
                    <p>Resolved an issue where certain complex radial bend shapes would export with incorrect angle definitions in the BVBS machine file format.</p>
                  </div>
                </div>
                
                <div className="lr-update-item">
                  <div className="lr-update-type type-security">Security</div>
                  <div className="lr-update-content">
                    <h4>Local Server TLS Update</h4>
                    <p>Updated the local floating license server to enforce TLS 1.3 by default, deprecating support for legacy TLS 1.1 connections.</p>
                  </div>
                </div>
                
                <div className="lr-update-item">
                  <div className="lr-update-type type-improved">Improved</div>
                  <div className="lr-update-content">
                    <h4>Custom Rule Documentation</h4>
                    <p>Expanded the Developer SDK documentation covering Python hooks for post-import validation scripts.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default LatestRelease;
