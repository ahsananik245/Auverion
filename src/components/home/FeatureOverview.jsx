import React from 'react';
import './FeatureOverview.css';

const features = [
  {
    title: 'Offline AI, Bundled',
    desc: 'Revin ships with its own fine-tuned model that runs on your machine — no cloud, no API keys, no internet required.',
    icon: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z M12 12v6 M9 15l3 3 3-3'
  },
  {
    title: 'Plain-Language Automation',
    desc: 'Describe what you want and Revin models and documents it in Revit — floor plans, sheets, schedules, tags, and more.',
    icon: 'M8 9h8 M8 13h6 M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
  },
  {
    title: 'Native Revit Plugin',
    desc: 'Both tools live inside Revit — no standalone app to switch to. Install once and work directly in your BIM environment.',
    icon: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5'
  },
  {
    title: 'Data Never Leaves Your PC',
    desc: 'Everything runs locally — ideal for NDA, government, and air-gapped projects where cloud AI is off the table.',
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  },
  {
    title: 'Structural Detailing (RebarX)',
    desc: 'Automate reinforcement modeling and detailing from ETABS analysis, straight to Revit geometry, drawings, and BOQ.',
    icon: 'M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  },
  {
    title: 'Documentation at Scale',
    desc: 'Batch floor plans, sheets, tagging, schedules, and view renaming — the repetitive work, done in one instruction.',
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'
  },
  {
    title: 'Sustainability & QC',
    desc: 'Estimate embodied carbon and audit models against your firm’s QC rules — all computed locally, offline.',
    icon: 'M9 12l2 2 4-4 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z'
  },
  {
    title: 'Turnkey & Enterprise Ready',
    desc: 'One installer, model included, works across Revit 2022–2026. Floating licenses and on-prem options for firms.',
    icon: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }
];

const FeatureOverview = () => {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={feature.icon}></path>
              </svg>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
              <div className="feature-learn-more">
                Learn More 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;
