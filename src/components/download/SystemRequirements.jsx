import React from 'react';
import './SystemRequirements.css';

const SystemRequirements = () => {
  return (
    <section className="system-requirements">
      <div className="container">
        <h3 className="sr-section-title">System Requirements</h3>
        
        <div className="sr-grid">
          {/* Minimum */}
          <div className="sr-panel">
            <div className="sr-panel-header">Minimum</div>
            <div className="sr-property-row">
              <span className="sr-property-label">Operating System</span>
              <span className="sr-property-value">Windows 10 (64-bit)</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Processor</span>
              <span className="sr-property-value">Intel Core i5 / AMD Ryzen 5</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Memory</span>
              <span className="sr-property-value">8 GB RAM</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Graphics</span>
              <span className="sr-property-value">DirectX 11 compatible, 2 GB VRAM</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Storage</span>
              <span className="sr-property-value">10 GB available space</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Display</span>
              <span className="sr-property-value">1920 x 1080 resolution</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">.NET Runtime</span>
              <span className="sr-property-value">.NET Framework 4.8</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Internet</span>
              <span className="sr-property-value">Required for initial activation</span>
            </div>
          </div>
          
          {/* Recommended */}
          <div className="sr-panel">
            <div className="sr-panel-header" style={{color: 'var(--accent-blue)'}}>Recommended</div>
            <div className="sr-property-row">
              <span className="sr-property-label">Operating System</span>
              <span className="sr-property-value">Windows 11 (64-bit)</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Processor</span>
              <span className="sr-property-value">Intel Core i7/i9 / AMD Ryzen 7/9</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Memory</span>
              <span className="sr-property-value">32 GB RAM</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Graphics</span>
              <span className="sr-property-value">NVIDIA RTX series / AMD RX 6000+ (8 GB VRAM)</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Storage</span>
              <span className="sr-property-value">20 GB NVMe SSD</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Display</span>
              <span className="sr-property-value">4K (3840 x 2160) dual monitors</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">.NET Runtime</span>
              <span className="sr-property-value">.NET 6.0 or higher</span>
            </div>
            <div className="sr-property-row">
              <span className="sr-property-label">Internet</span>
              <span className="sr-property-value">Broadband for cloud sync</span>
            </div>
          </div>
        </div>
        
        <div className="sr-compatibility">
          <div className="sr-compat-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            Windows 11 Ready
          </div>
          <div className="sr-compat-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            Windows 10 Compatible
          </div>
          <div className="sr-compat-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
            64-bit Only
          </div>
          <div className="sr-compat-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            ETABS v19 - v21
          </div>
          <div className="sr-compat-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            Revit 2022 - 2024
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SystemRequirements;
