import React, { useState } from 'react';
import './InteractiveFeatures.css';

const tabData = [
  {
    id: 'import',
    label: 'Import',
    title: 'Seamless Data Extraction',
    desc: 'Extract forces, geometry, and load combinations directly from your ETABS model. RebarX reads the native structural data to ensure 100% accuracy without manual entry.',
    points: [
      'Reads native ETABS .e2k and .edb files',
      'Preserves complex load combinations',
      'Validates geometry automatically'
    ]
  },
  {
    id: 'analyze',
    label: 'Analyze',
    title: 'Intelligent Code Compliance',
    desc: 'The Auverion engine processes the raw forces against local design codes (ACI, Eurocode, BS) to determine the exact optimal reinforcement requirements.',
    points: [
      'Real-time code checking',
      'Customizable reinforcement rules',
      'Optimizes for constructability'
    ]
  },
  {
    id: 'reinforce',
    label: 'Reinforce',
    title: 'Automated 3D Detailing',
    desc: 'Generate complete 3D reinforcement models instantly. The engine resolves clashes, details complex joints, and applies standard hooks and laps automatically.',
    points: [
      'Clash-free 3D bar generation',
      'Automatic lap splices and development lengths',
      'Complex joint resolution'
    ]
  },
  {
    id: 'export',
    label: 'Export',
    title: 'BIM & Fabrication Ready',
    desc: 'Push the finalized models directly into Autodesk Revit, or generate 2D AutoCAD drawings and detailed Bill of Quantities (BOQ) with a single click.',
    points: [
      'Native Revit family generation',
      'Automated 2D detailing sheets',
      'Precise bar bending schedules'
    ]
  }
];

const InteractiveFeatures = () => {
  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <section className="interactive-features">
      <div className="container">
        
        <div className="if-header">
          <h2 className="if-title">The Complete Workflow</h2>
        </div>
        
        <div className="if-tabs-container">
          <div className="if-tabs">
            {tabData.map(tab => (
              <div 
                key={tab.id}
                className={`if-tab ${activeTab.id === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>
        
        <div className="if-content">
          <div className="if-left">
            <h3 className="if-content-title">{activeTab.title}</h3>
            <p className="if-content-desc">{activeTab.desc}</p>
            
            <div className="if-list">
              {activeTab.points.map((point, index) => (
                <div className="if-list-item" key={index}>
                  <svg className="if-list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="if-list-text">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="if-right">
            <div className="if-visual-placeholder">
              <div className="if-vp-header">
                <span style={{ fontSize: '12px', color: '#6b7280' }}>RebarX - {activeTab.label} Phase</span>
              </div>
              <div className="if-vp-body">
                <div className="if-vp-graphics"></div>
                <div className="if-visual-overlay">
                  <div className="if-play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
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

export default InteractiveFeatures;
