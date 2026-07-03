import React from 'react';
import Button from '../ui/Button';
import './PipelineWorkflow.css';

const PipelineWorkflow = () => {
  const stages = [
    { title: 'ETABS', desc: 'Import structural model', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
    { title: 'Extract', desc: 'Read internal forces', icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3' },
    { title: 'EXR', desc: 'Format conversion', icon: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M13 2v7h7' },
    { title: 'Import', desc: 'Load into RebarX', icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12' },
    { title: 'Revit', desc: 'Sync geometry', icon: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5' },
    { title: 'Columns', desc: 'Reinforce vertical', icon: 'M8 2v20 M16 2v20 M4 6h16 M4 18h16' },
    { title: 'Beams', desc: 'Reinforce horizontal', icon: 'M2 8h20 M2 16h20 M6 4v16 M18 4v16' },
    { title: 'Drawings', desc: 'Generate 2D sheets', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8' },
    { title: 'BOQ', desc: 'Calculate quantities', icon: 'M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
    { title: 'Complete', desc: 'Workflow finished', icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3', final: true },
  ];

  return (
    <section className="pipeline-section">
      <div className="pipeline-header">
        <h2>
          One Intelligent Workflow <br />
          From Analysis to Reinforcement <br />
          Without Manual Rework.
        </h2>
      </div>

      <div className="pipeline-container-scroll">
        <div className="pipeline-track">
          <div className="pipeline-pulse-line"></div>
          {stages.map((stage, index) => (
            <div className="pipeline-stage-wrapper" key={index}>
              <div className={`pipeline-stage ${stage.final ? 'final' : ''}`}>
                <svg className="pipeline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={stage.icon}></path>
                </svg>
                <div className="pipeline-title">{stage.title}</div>
                <div className="pipeline-desc">{stage.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pipeline-cta">
        <Button variant="ghost">See Complete Workflow</Button>
      </div>
    </section>
  );
};

export default PipelineWorkflow;
