import React from 'react';
import Button from '../ui/Button';
import './SolutionsContent.css';

const solutions = [
  {
    title: 'Structural Engineers',
    description: 'Automate tedious rebar detailing and focus on structural integrity. Seamlessly integrate with your existing ETABS and Revit models.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    title: 'General Contractors',
    description: 'Avoid onsite clashes with clash-free 3D reinforcement models. Generate accurate bar bending schedules instantly to reduce material waste.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V7l8-4 8 4v14M9 11v4M15 11v4"/>
      </svg>
    )
  },
  {
    title: 'Precast Detailers',
    description: 'Accelerate the production of shop drawings. Ensure every precast element is perfectly detailed before it hits the manufacturing floor.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <path d="M9 3v18M15 3v18"/>
      </svg>
    )
  }
];

const SolutionsContent = () => {
  return (
    <div className="solutions-page">
      <section className="solutions-hero anim-fade-in">
        <div className="container">
          <h1 className="solutions-title">Solutions Built for Your <span className="highlight-gradient">Workflow</span></h1>
          <p className="solutions-subtitle">
            Whether you are designing complex high-rises or managing on-site execution, 
            Auverion adapts to your specific engineering challenges.
          </p>
        </div>
      </section>

      <section className="solutions-grid-section">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map((item, index) => (
              <div className="solution-card anim-slide-up" style={{ animationDelay: `${index * 100}ms` }} key={index}>
                <div className="solution-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="solution-card-title">{item.title}</h3>
                <p className="solution-card-desc">{item.description}</p>
                <span className="solution-link disabled" style={{opacity: 0.5, cursor: 'not-allowed'}}>Learn more (Coming Soon)</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Not sure which solution is right for you?</h2>
            <p>Our team of structural experts is ready to help you optimize your workflow.</p>
            <div className="cta-actions">
              <Button variant="primary" size="large">Talk to an Expert</Button>
              <Button variant="ghost" size="large">View Pricing</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsContent;
