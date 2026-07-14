import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <div className="about-content container">
      <section className="about-story">
        <div className="about-text">
          <h2 className="anim-fade-in">Why We're Building This</h2>
          <p className="anim-fade-in">
            Auverion was started in 2026 to solve a specific, painful problem in structural engineering: the hours of manual, repetitive work required to go from a structural analysis model to finished reinforcement drawings and schedules.
          </p>
          <p className="anim-fade-in">
            RebarX is the first product — a Revit add-in that reads ETABS design outputs and automates the reinforcement modeling, detailing, and drawing generation workflow. We're early-stage, focused, and building in public.
          </p>
        </div>
        <div className="about-image anim-slide-up">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" alt="Structural engineering blueprints" />
        </div>
      </section>

      <section className="about-values-section">
        <h2 className="text-center anim-slide-up" style={{ marginBottom: '48px' }}>What We Care About</h2>
        <div className="about-values">
          <div className="value-card anim-slide-up">
            <div className="value-icon">🎯</div>
            <h3>Precision</h3>
            <p>Structural software has zero tolerance for error. Every output RebarX generates is designed to be verifiable and code-compliant.</p>
          </div>
          <div className="value-card anim-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="value-icon">⚡</div>
            <h3>Speed Without Shortcuts</h3>
            <p>Automation should make engineers faster — not replace their judgment. We automate the repetitive, not the critical.</p>
          </div>
          <div className="value-card anim-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="value-icon">🔍</div>
            <h3>Transparency</h3>
            <p>We're an early-stage company. We say what we've built, what we're working on, and what doesn't exist yet — no exaggeration.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
