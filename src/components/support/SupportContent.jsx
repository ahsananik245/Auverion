import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './SupportContent.css';

const SupportContent = () => {
  return (
    <div className="support-page">
      <section className="support-hero anim-fade-in">
        <div className="container">
          <h1>How can we help you?</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '560px', margin: '16px auto 0' }}>
            RebarX is in closed beta. Support is handled directly via email — we aim to respond within a few business days.
          </p>
        </div>
      </section>

      <section className="support-channels section">
        <div className="container">
          <div className="channels-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="channel-card anim-slide-up" style={{ animationDelay: '0ms' }}>
              <div className="channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h3>Email Support</h3>
              <p>Send us your question or issue and we'll get back to you directly.</p>
              <Button variant="primary" as="a" href="mailto:support@auverion.com">Email Support</Button>
            </div>

            <div className="channel-card anim-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              </div>
              <h3>Documentation</h3>
              <p>Browse installation guides, workflow tutorials, and technical references for RebarX.</p>
              <Button variant="ghost" as={Link} to="/documentation">View Docs</Button>
            </div>

            <div className="channel-card anim-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3>General Enquiries</h3>
              <p>Questions about licensing, pricing, or enterprise plans? Reach out via our contact form.</p>
              <Button variant="ghost" as={Link} to="/company/contact">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="knowledge-base section">
        <div className="container">
          <div className="kb-header">
            <h2>Knowledge Base</h2>
            <Link to="/documentation" className="view-all">View documentation →</Link>
          </div>
          <div className="kb-grid">
            {['Getting Started with RebarX', 'Troubleshooting ETABS Export', 'Customizing Reinforcement Rules', 'License Activation Issues', 'Best Practices for Large Models', 'Exporting to Revit'].map((article, i) => (
              <span className="kb-article disabled" key={i} style={{opacity: 0.5, cursor: 'not-allowed'}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span>{article} (Coming Soon)</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportContent;
