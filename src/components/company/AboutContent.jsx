import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <div className="about-content container">
      <section className="about-story">
        <div className="about-text">
          <h2 className="anim-fade-in">Our Founding Narrative</h2>
          <p className="anim-fade-in">Founded in 2026, Auverion was born from a singular vision: to democratize advanced technology for businesses worldwide. What started as a small team of passionate engineers has grown into a global leader in AI-driven solutions.</p>
          <p className="anim-fade-in">We believe that software should be intuitive, powerful, and accessible. Our journey is fueled by a relentless commitment to innovation and a deep understanding of our customers' needs.</p>
        </div>
        <div className="about-image anim-slide-up">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Auverion Team Collaboration" />
        </div>
      </section>

      <section className="about-values-section">
        <h2 className="text-center anim-slide-up" style={{ marginBottom: '48px' }}>Our Core Values</h2>
        <div className="about-values">
          <div className="value-card anim-slide-up">
            <div className="value-icon">💡</div>
            <h3>Innovation First</h3>
            <p>We consistently push the boundaries of what's possible, embracing new ideas and emerging technologies to deliver state-of-the-art solutions.</p>
          </div>
          <div className="value-card anim-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="value-icon">🤝</div>
            <h3>Customer Success</h3>
            <p>Our customers' growth is our growth. We are dedicated to providing unparalleled support and building tools that genuinely empower users.</p>
          </div>
          <div className="value-card anim-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="value-icon">🌍</div>
            <h3>Global Inclusivity</h3>
            <p>We build for everyone. Diversity in our team and our user base drives better, more accessible, and more empathetic product design.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
