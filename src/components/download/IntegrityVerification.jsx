import React from 'react';
import './IntegrityVerification.css';

const IntegrityVerification = () => {
  return (
    <section className="integrity-verification">
      <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
        
        <div className="iv-card">
          <div className="iv-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
          </div>
          
          <h3 className="iv-title">Secure & Authenticated</h3>
          <p className="iv-desc">
            Auverion takes software supply chain security seriously. Every installer is digitally signed by Auverion Inc. and verified against tamper-proof checksums.
          </p>
          
          <div className="iv-features">
            <div className="iv-feature">
              <div className="iv-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <span className="iv-feature-text">Extended Validation Certificate</span>
            </div>
            <div className="iv-feature">
              <div className="iv-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <span className="iv-feature-text">Microsoft SmartScreen Verified</span>
            </div>
            <div className="iv-feature">
              <div className="iv-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </div>
              <span className="iv-feature-text">SHA-256 Checksums</span>
            </div>
          </div>
          
          <div className="iv-code-container">
            <pre className="iv-code-block">
              Get-FileHash .\Auverion_RebarX_v1.8.2.exe -Algorithm SHA256
            </pre>
            <button className="iv-copy-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              Copy Command
            </button>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default IntegrityVerification;
