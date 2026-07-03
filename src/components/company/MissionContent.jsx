import React from 'react';
import './MissionContent.css';

const MissionContent = () => {
  return (
    <div className="mission-content container">
      <section className="mission-statement anim-slide-up">
        <h2>Empowering the Future Through Intelligent Design</h2>
        <p>Our mission is to simplify the complex and amplify human potential. We strive to provide developers and enterprises with the most robust, scalable, and intuitive platforms imaginable, enabling them to build the next generation of digital experiences without friction.</p>
      </section>

      <section className="mission-goals-section">
        <h3 className="text-center anim-fade-in" style={{ marginBottom: '48px', fontSize: 'var(--text-h2)' }}>Our Strategic Goals for 2030</h3>
        <div className="mission-goals">
          <div className="goal-card anim-slide-up">
            <div className="goal-number">01</div>
            <h4>Carbon Neutrality</h4>
            <p className="text-secondary" style={{ marginTop: '16px' }}>Achieve 100% renewable energy across all our global data centers and offices.</p>
          </div>
          <div className="goal-card anim-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="goal-number">02</div>
            <h4>Open Source First</h4>
            <p className="text-secondary" style={{ marginTop: '16px' }}>Contribute over 1 million lines of code to the open-source community annually.</p>
          </div>
          <div className="goal-card anim-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="goal-number">03</div>
            <h4>Global Literacy</h4>
            <p className="text-secondary" style={{ marginTop: '16px' }}>Provide free tech education resources to 5 million underserved students worldwide.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionContent;
