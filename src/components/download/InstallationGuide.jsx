import React from 'react';
import Button from '../ui/Button';
import './InstallationGuide.css';

const steps = [
  {
    title: 'Download',
    desc: 'Get the latest installer.',
    icon: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
  },
  {
    title: 'Run Installer',
    desc: 'Require admin rights.',
    icon: <polygon points="5 3 19 12 5 21 5 3"></polygon>
  },
  {
    title: 'Accept License',
    desc: 'Review the EULA.',
    icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  },
  {
    title: 'Choose Location',
    desc: 'Select install path.',
    icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
  },
  {
    title: 'Install',
    desc: 'Unpacking files.',
    icon: <line x1="12" y1="5" x2="12" y2="19"></line>
  },
  {
    title: 'Activate License',
    desc: 'Enter your key.',
    icon: <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
  },
  {
    title: 'Launch RebarX',
    desc: 'Start detailing.',
    icon: <circle cx="12" cy="12" r="10"></circle>
  }
];

const InstallationGuide = () => {
  return (
    <section className="installation-guide">
      <div className="container">
        
        <h3 className="ig-section-title">Installation Guide</h3>
        
        <div className="ig-timeline">
          {steps.map((step, index) => (
            <div className="ig-step" key={index}>
              <div className="ig-step-card">
                <svg className="ig-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {step.icon}
                  {index === 0 && <polyline points="7 10 12 15 17 10"></polyline>}
                  {index === 4 && <polyline points="19 12 12 19 5 12"></polyline>}
                  {index === 5 && <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>}
                  {index === 6 && <polyline points="12 16 16 12 12 8"></polyline>}
                </svg>
                <div className="ig-step-title">{step.title}</div>
              </div>
              <div className="ig-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
        
        <div className="ig-actions">
          <Button variant="secondary">View Full Installation Guide</Button>
        </div>
        
      </div>
    </section>
  );
};

export default InstallationGuide;
