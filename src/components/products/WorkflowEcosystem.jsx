import React from 'react';
import './WorkflowEcosystem.css';

const WorkflowEcosystem = () => {
  const stages = [
    { title: 'ETABS', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' },
    { title: 'RebarX', icon: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5' },
    { title: 'Drawings', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
    { title: 'BOQ', icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2' },
    { title: 'Future Cloud', icon: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z' },
    { title: 'Construction', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  ];

  return (
    <section className="workflow-eco-section">
      <div className="we-header">
        <h2 className="we-title">Complete Workflow Ecosystem</h2>
      </div>
      
      <div className="we-container">
        <div className="we-track">
          <div className="we-pulse"></div>
          {stages.map((stage, index) => (
            <div className="we-stage-wrapper" key={index}>
              <div className="we-stage">
                <svg className="we-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={stage.icon}></path>
                </svg>
                <div className="we-stage-title">{stage.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowEcosystem;
