import React from 'react';
import './CapabilitiesGrid.css';

const capabilities = [
  {
    title: 'Strict Code Compliance',
    desc: 'Automatically verifies your reinforcement layout against ACI 318, Eurocode 2, and BS 8110. Instantly flags code violations before detailing begins.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Custom Rebar Rules',
    desc: 'Define your own organizational standards. Set preferred bar sizes, minimum spacing, lap splice locations, and curtailment rules for every element type.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
  },
  {
    title: 'Intelligent Conflict Resolution',
    desc: 'The 3D engine automatically detects and resolves rebar clashes at complex beam-column joints, adjusting hooks and development lengths dynamically.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'EXR Data Integration',
    desc: 'Built on the proprietary EXR format, seamlessly pulling internal forces, moments, and geometry directly from ETABS into your active Revit session.',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
  },
  {
    title: 'Batch Element Processing',
    desc: 'Reinforce thousands of structural elements simultaneously. RebarX uses multi-threading to process massive high-rise models in minutes.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    title: 'BIM Native Export',
    desc: 'Exports true 3D Revit elements, not just dumb geometry. Families are fully parameterized and ready for coordination and clash detection.',
    icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
  }
];

const CapabilitiesGrid = () => {
  return (
    <section className="capabilities-section">
      <div className="container">
        <div className="cg-header">
          <h2 className="cg-title">Technical Capabilities</h2>
          <p className="cg-desc">
            RebarX isn't just a drafting tool; it's an intelligent engineering platform built to handle the complexities of real-world structural detailing.
          </p>
        </div>
        
        <div className="cg-grid">
          {capabilities.map((item, index) => (
            <div className="cg-card" key={index}>
              <svg className="cg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon}></path>
              </svg>
              <h3 className="cg-card-title">{item.title}</h3>
              <p className="cg-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;
