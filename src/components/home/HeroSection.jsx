import React from 'react';
import Button from '../ui/Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-blueprint"></div>
      <div className="hero-bg-gradient"></div>
      
      <div className="container hero-content">
        <div className="hero-left">
          <h1 className="text-hero hero-title">
            Structural Reinforcement <br />
            <span className="hero-highlight">Without Manual Rework.</span>
          </h1>
          
          <p className="hero-desc">
            Automate reinforcement workflows between ETABS and Revit with intelligent engineering automation built for professional structural teams.
          </p>
          
          <div className="hero-buttons">
            <Button variant="primary" size="large">Download RebarX</Button>
            <Button variant="ghost" size="large">Watch Demo</Button>
          </div>
          
          <div className="hero-stats">
            <div>
              <div className="hero-stat-number">20x</div>
              <div className="hero-stat-label">Faster Workflow</div>
            </div>
            <div>
              <div className="hero-stat-number">98%</div>
              <div className="hero-stat-label">Automation Accuracy</div>
            </div>
            <div>
              <div className="hero-stat-number">100%</div>
              <div className="hero-stat-label">Native Desktop</div>
            </div>
          </div>
          
          <div className="hero-trust-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Professional Engineering Software
          </div>
        </div>
        
        <div className="hero-right">
          <div className="hero-mockup-container">
            <div className="hero-mockup">
              <div className="hero-mockup-header">
                <div className="hero-mockup-dot"></div>
                <div className="hero-mockup-dot"></div>
                <div className="hero-mockup-dot"></div>
              </div>
              <div className="hero-mockup-body">
                <div className="hero-mockup-sidebar"></div>
                <div className="hero-mockup-main"></div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="floating-card card-1">
              <div className="status-dot green"></div>
              ETABS Connected
            </div>
            <div className="floating-card card-2">
              <div className="status-dot gold"></div>
              Auto Pipeline Ready
            </div>
            <div className="floating-card card-3">
              <div className="status-dot blue"></div>
              Project Loaded
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
