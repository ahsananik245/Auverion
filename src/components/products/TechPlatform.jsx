import React from 'react';
import './TechPlatform.css';

const TechPlatform = () => {
  return (
    <section className="tech-platform">
      <div className="container">
        <div className="tp-content">
          
          <div className="tp-left">
            <div className="tp-diagram">
              
              <div className="tp-block-row">
                <div className="tp-block">ETABS Data</div>
                <div className="tp-arrow"></div>
                <div className="tp-block">EXR Format</div>
              </div>
              
              <div className="tp-arrow-down"></div>
              
              <div className="tp-block engine">
                Auverion Core Engine
              </div>
              
              <div className="tp-arrow-down"></div>
              
              <div className="tp-block-row">
                <div className="tp-block">2D Drawings</div>
                <div className="tp-arrow"></div>
                <div className="tp-block">Revit BIM</div>
              </div>
              
            </div>
          </div>
          
          <div className="tp-right">
            <span className="tp-badge">Core Technology</span>
            <h2 className="tp-title">Powered by the<br/>Auverion Engine</h2>
            <p className="tp-desc">
              All of our products are built on top of a shared, high-performance computational core. This ensures that whether you are detailing steel connections or reinforcing concrete, data flows seamlessly between applications without loss of fidelity.
            </p>
            
            <div className="tp-feature-list">
              <div className="tp-feature-item">
                <svg className="tp-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                <div className="tp-feature-text">
                  <h4>Unified EXR Format</h4>
                  <p>A proprietary data schema designed specifically for transferring complex structural forces and geometry.</p>
                </div>
              </div>
              
              <div className="tp-feature-item">
                <svg className="tp-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <div className="tp-feature-text">
                  <h4>Parametric Processing</h4>
                  <p>Changes in structural forces automatically trigger real-time recalculations of reinforcement and connections.</p>
                </div>
              </div>
              
              <div className="tp-feature-item">
                <svg className="tp-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <div className="tp-feature-text">
                  <h4>Native Exporting</h4>
                  <p>Direct API integrations with Revit, Tekla, and AutoCAD for zero-friction BIM coordination.</p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TechPlatform;
