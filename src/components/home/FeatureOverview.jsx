import React from 'react';
import './FeatureOverview.css';

const features = [
  {
    title: 'Automatic Reinforcement',
    desc: 'Instantly generate complete reinforcement models based on structural analysis results.',
    icon: 'M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  },
  {
    title: 'Native ETABS Integration',
    desc: 'Seamlessly import design forces directly from ETABS without manual data entry.',
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
  },
  {
    title: 'Native Revit Integration',
    desc: 'Export finalized reinforcement layouts directly into Autodesk Revit.',
    icon: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5'
  },
  {
    title: 'Drawing Generation',
    desc: 'Automatically produce 2D detailing sheets ready for construction.',
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'
  },
  {
    title: 'BOQ Generation',
    desc: 'Calculate precise quantities and generate bill of materials instantly.',
    icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2 M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2 M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2'
  },
  {
    title: '3D Preview',
    desc: 'Review and verify reinforcement detailing in a high-performance 3D viewport.',
    icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'
  },
  {
    title: 'Batch Processing',
    desc: 'Process hundreds of structural elements simultaneously in the background.',
    icon: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  },
  {
    title: 'Enterprise Ready',
    desc: 'Built for large-scale engineering organizations with standard security and support.',
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
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
