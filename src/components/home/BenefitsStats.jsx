import React from 'react';
import './BenefitsStats.css';

const BenefitsStats = () => {
  return (
    <section className="benefits-section">
      <div className="container">
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div className="benefit-stat">80%</div>
            <h3 className="benefit-title">Save Time</h3>
            <p className="benefit-desc">
              Cut hours of repetitive BIM work. Revin automates modeling and documentation from a single plain-language request, right inside Revit.
            </p>
          </div>
          
          <div className="benefit-card">
            <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div className="benefit-stat">100%</div>
            <h3 className="benefit-title">Stay Private</h3>
            <p className="benefit-desc">
              Everything runs on your machine. No cloud, no API keys, no project data leaving your PC — built for NDA, government, and air-gapped work.
            </p>
          </div>
          
          <div className="benefit-card">
            <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              <line x1="9" y1="14" x2="15" y2="14"></line>
              <line x1="9" y1="10" x2="15" y2="10"></line>
            </svg>
            <div className="benefit-stat">90%</div>
            <h3 className="benefit-title">Reduce Manual Work</h3>
            <p className="benefit-desc">
              From batch plans and schedules to reinforcement detailing, the Auverion suite handles the repetitive tasks so you focus on design decisions.
            </p>
          </div>
        </div>


        
      </div>
    </section>
  );
};

export default BenefitsStats;
