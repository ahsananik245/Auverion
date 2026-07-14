import React from 'react';
import './MissionContent.css';

const MissionContent = () => {
  return (
    <div className="mission-content container">
      <section className="mission-statement anim-slide-up">
        <h2>Eliminate the Detailing Bottleneck</h2>
        <p>
          Structural engineers spend a disproportionate amount of time on reinforcement detailing — a workflow that is largely mechanical and repetitive. Our mission is to automate that bottleneck so engineers can focus on the work that actually requires their expertise: design, review, and judgment.
        </p>
        <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
          We're starting with concrete reinforcement via RebarX and will expand to other structural detailing domains as each is done properly.
        </p>
      </section>

      <section className="mission-goals-section">
        <h3 className="text-center anim-fade-in" style={{ marginBottom: '48px', fontSize: 'var(--text-h2)' }}>What We're Working Toward</h3>
        <div className="mission-goals">
          <div className="goal-card anim-slide-up">
            <div className="goal-number">01</div>
            <h4>Full Concrete Detailing Coverage</h4>
            <p className="text-secondary" style={{ marginTop: '16px' }}>A complete pipeline from analysis export to issued-for-construction reinforcement drawings — for beams, columns, slabs, walls, and stairs.</p>
          </div>
          <div className="goal-card anim-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="goal-number">02</div>
            <h4>Multi-Code Support</h4>
            <p className="text-secondary" style={{ marginTop: '16px' }}>Design code compliance for ACI, Eurocode, BS 8110, and regional variants — so RebarX works for engineers globally, not just in one market.</p>
          </div>
          <div className="goal-card anim-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="goal-number">03</div>
            <h4>Expand Beyond Concrete</h4>
            <p className="text-secondary" style={{ marginTop: '16px' }}>Steel connections, foundations, and bridges are next. Each will be released when it's genuinely ready — not announced before it exists.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionContent;
