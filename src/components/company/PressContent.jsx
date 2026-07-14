import React from 'react';
import './PressContent.css';

const PressContent = () => {
  return (
    <div className="press-content container">
      <div className="press-header text-center anim-fade-in" style={{ marginBottom: '48px' }}>
        <h2>Press &amp; News</h2>
        <p className="text-secondary" style={{ marginTop: '16px' }}>
          Auverion is early-stage and has not yet been covered by external press. We'll update this page as coverage appears.
        </p>
      </div>

      <div className="press-empty anim-slide-up" style={{
        maxWidth: '560px',
        margin: '0 auto',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-divider)',
        borderRadius: 'var(--radius-card)',
        padding: '56px 40px',
        textAlign: 'center'
      }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8L4 6v14a2 2 0 0 0 0 2z"/>
          <line x1="9" y1="9" x2="15" y2="9"/>
          <line x1="9" y1="13" x2="15" y2="13"/>
        </svg>
        <h3 style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}>No press coverage yet</h3>
        <p className="text-secondary" style={{ lineHeight: '1.7' }}>
          RebarX was recently launched in closed beta. We'll post real announcements, launch articles, and mentions here as they happen.
        </p>
      </div>

      <div className="press-contact anim-fade-in" style={{ textAlign: 'center', marginTop: '48px' }}>
        <p className="text-secondary" style={{ fontSize: 'var(--text-sm)' }}>
          Press inquiries:{' '}
          <a href="mailto:press@auverion.com" style={{ color: 'var(--accent-primary)' }}>press@auverion.com</a>
        </p>
      </div>
    </div>
  );
};

export default PressContent;
