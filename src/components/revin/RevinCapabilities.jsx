import React from 'react';
// Reuse the RebarX capabilities-grid styling so Revin matches the site system.
import '../rebarx/CapabilitiesGrid.css';

const capabilities = [
  {
    title: 'Offline, Bundled AI',
    desc: 'Ships with its own fine-tuned model that runs on your machine. No cloud, no API keys, no subscription to a third-party LLM. Works with zero internet.',
    icon: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z M12 12v6 M9 15l3 3 3-3'
  },
  {
    title: 'Plain-Language Automation',
    desc: 'Say "create floor plans for every level and tag all the doors" and Revin does it. It understands your model and picks the right tools for the job automatically.',
    icon: 'M8 9h8 M8 13h6 M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
  },
  {
    title: '100+ Built-In Tools',
    desc: 'Walls, floors, roofs, rooms, columns, beams, foundations, sheets, schedules, tags, views, DWG/IFC/PDF export and more — all callable in one instruction.',
    icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
  },
  {
    title: 'Remembers Your Project',
    desc: 'Conversation memory is saved with each project and travels inside the .rvt file itself — reopen tomorrow, or on another machine, and Revin picks up where you left off.',
    icon: 'M12 8v4l3 3 M3.05 11a9 9 0 1 1 .5 4 M3 4v4h4'
  },
  {
    title: 'RebarX Integration',
    desc: 'Trigger Auverion RebarX reinforcement detailing and bar-bending schedules straight from a Revin instruction — the two products work as one workflow.',
    icon: 'M4 7V4h16v3 M9 20h6 M12 4v16'
  },
  {
    title: 'Sustainability & QC',
    desc: 'Estimate embodied carbon, audit the model against your firm QC rules, and generate reports and CSV/Excel exports — all computed locally, offline.',
    icon: 'M9 12l2 2 4-4 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z'
  }
];

const RevinCapabilities = () => {
  return (
    <section className="capabilities-section">
      <div className="container">
        <div className="cg-header">
          <h2 className="cg-title">What Revin Does</h2>
          <p className="cg-desc">
            Revin is a full BIM automation assistant, not a chatbot bolted onto Revit.
            It understands your model, plans multi-step work, and executes it with a
            large toolset — entirely on your own hardware.
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

export default RevinCapabilities;
