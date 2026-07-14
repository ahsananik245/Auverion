import React from 'react';
import './PartnersContent.css';

const PartnersContent = () => {
  return (
    <div className="partners-content container">
      <div className="partners-program anim-slide-up">
        <h2>Auverion Partner Network</h2>
        <p>
          We're building a partner program for agencies, systems integrators, and technology firms who want to deliver
          RebarX and future Auverion tools to their clients. The program is currently in its early stages.
        </p>
        <a href="/company/contact" className="btn-primary" style={{ display: 'inline-block', marginTop: '16px' }}>
          Express Interest
        </a>
      </div>

      <div className="partners-placeholder anim-fade-in" style={{
        textAlign: 'center',
        marginTop: '64px',
        padding: '56px 40px',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-divider)',
        borderRadius: 'var(--radius-card)'
      }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
          <circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/>
          <path d="M7.5 7.2A10 10 0 0 1 12 6a10 10 0 0 1 4.5 1.2"/>
          <path d="M7.5 16.8A10 10 0 0 0 12 18a10 10 0 0 0 4.5-1.2"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
        <h3 style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}>Partner logos coming soon</h3>
        <p className="text-secondary" style={{ maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
          We'll list verified technology and reseller partners here once those relationships are formally established.
          No placeholder logos — only real partners.
        </p>
      </div>
    </div>
  );
};

export default PartnersContent;
