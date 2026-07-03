import React from 'react';
import './CultureContent.css';

const CultureContent = () => {
  return (
    <div className="culture-content container">
      <div className="text-center anim-slide-up" style={{ marginBottom: '64px' }}>
        <h2>How We Work</h2>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '16px auto' }}>
          Culture isn't just ping-pong tables. It's how we treat each other, how we make decisions, and what we value when the pressure is on.
        </p>
      </div>
      
      <div className="culture-grid">
        <div className="culture-card anim-slide-up">
          <h3>Radical Candor</h3>
          <p>We believe in challenging directly while caring personally. Open, honest feedback is the cornerstone of our personal and professional growth.</p>
        </div>
        <div className="culture-card anim-slide-up" style={{ animationDelay: '100ms' }}>
          <h3>Async First</h3>
          <p>We respect deep work. We default to written, asynchronous communication to allow everyone to manage their own time and productivity.</p>
        </div>
        <div className="culture-card anim-slide-up" style={{ animationDelay: '200ms' }}>
          <h3>Fail Fast, Learn Faster</h3>
          <p>We don't fear failure; we fear stagnation. We encourage experimentation and view every setback as a valuable data point for future success.</p>
        </div>
        <div className="culture-card anim-slide-up" style={{ animationDelay: '300ms' }}>
          <h3>Empathy Driven</h3>
          <p>Whether designing a UI or resolving an internal conflict, empathy is our guiding principle. We put ourselves in others' shoes first.</p>
        </div>
      </div>

      <div className="culture-gallery anim-fade-in" style={{ animationDelay: '400ms' }}>
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" alt="Team meeting" />
        <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80" alt="Office space" />
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Collaboration" />
      </div>
    </div>
  );
};

export default CultureContent;
