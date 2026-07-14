import React from 'react';
import './CareersContent.css';

const CareersContent = () => {
  return (
    <div className="careers-content container">
      <section className="careers-intro anim-slide-up">
        <div>
          <h2>Work at Auverion</h2>
          <p className="text-secondary" style={{ marginTop: '16px', fontSize: 'var(--text-body-large)' }}>
            Auverion is an early-stage startup and not currently hiring. When we do have open roles, they'll be posted here — honestly, with real locations and real job requirements.
          </p>
          <p className="text-secondary" style={{ marginTop: '16px' }}>
            If you're excited about what we're building and want to reach out anyway, we'd love to hear from you.
          </p>
          <a
            href="/company/contact"
            className="perk-badge"
            style={{ display: 'inline-block', marginTop: '24px', textDecoration: 'none' }}
          >
            ✉️ Get in Touch
          </a>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=800&q=80"
            alt="Engineering workspace"
            style={{ width: '100%', borderRadius: 'var(--radius-image)' }}
          />
        </div>
      </section>

      <section className="open-positions anim-fade-in" style={{ animationDelay: '200ms' }}>
        <h3 style={{ marginBottom: '24px' }}>Open Positions</h3>
        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-divider)',
          borderRadius: 'var(--radius-card)',
          padding: '48px 40px',
          textAlign: 'center'
        }}>
          <p className="text-secondary">No open positions right now. Check back later.</p>
        </div>
      </section>
    </div>
  );
};

export default CareersContent;
