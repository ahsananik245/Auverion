import React from 'react';
import './TeamContent.css';

const TeamContent = () => {
  return (
    <div className="team-content container">
      <div className="team-header text-center anim-fade-in" style={{ marginBottom: '64px' }}>
        <h2>The People Behind Auverion</h2>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '16px auto 0' }}>
          Auverion is an early-stage company. We'll introduce our full team here as we grow.
        </p>
      </div>

      <div className="team-founder-block anim-slide-up" style={{
        maxWidth: '520px',
        margin: '0 auto',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-divider)',
        borderRadius: 'var(--radius-card)',
        padding: '48px 40px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          margin: '0 auto 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          color: '#fff',
          fontWeight: '700'
        }}>A</div>
        <h3 style={{ marginBottom: '8px' }}>Ahsan Anik</h3>
        <p style={{ color: 'var(--accent-primary)', fontSize: 'var(--text-sm)', marginBottom: '16px', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Founder
        </p>
        <p className="text-secondary" style={{ lineHeight: '1.7' }}>
          Builder of Auverion and RebarX. Structural engineering background with a focus on automating repetitive detailing workflows.
        </p>
      </div>

      <p className="text-secondary text-center anim-fade-in" style={{ marginTop: '48px', opacity: 0.6, fontSize: 'var(--text-sm)' }}>
        Interested in joining the team?{' '}
        <a href="/company/contact" style={{ color: 'var(--accent-primary)' }}>Get in touch.</a>
      </p>
    </div>
  );
};

export default TeamContent;
