import React from 'react';
import Button from '../ui/Button';
import './SupportContent.css';

const SupportContent = () => {
  return (
    <div className="support-page">
      <section className="support-hero anim-fade-in">
        <div className="container">
          <h1>How can we help you today?</h1>
          <div className="search-bar-wrapper">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search documentation, tutorials, and FAQs..." className="support-search-input" />
          </div>
        </div>
      </section>

      <section className="support-channels section">
        <div className="container">
          <div className="channels-grid">
            <div className="channel-card anim-slide-up" style={{ animationDelay: '0ms' }}>
              <div className="channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </div>
              <h3>Live Chat</h3>
              <p>Chat directly with our support engineers for real-time assistance.</p>
              <Button variant="primary">Start Chat</Button>
            </div>
            
            <div className="channel-card anim-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h3>Email Support</h3>
              <p>Send us an email and we'll get back to you within 24 hours.</p>
              <Button variant="ghost">Send Email</Button>
            </div>

            <div className="channel-card anim-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3>Phone Support</h3>
              <p>Enterprise customers can call our dedicated priority hotline.</p>
              <Button variant="ghost">View Numbers</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="knowledge-base section">
        <div className="container">
          <div className="kb-header">
            <h2>Knowledge Base</h2>
            <a href="/documentation" className="view-all">View all articles →</a>
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
      
      <section className="ticket-section">
        <div className="container">
          <div className="ticket-box">
            <h2>Still need help?</h2>
            <p>Submit a support ticket and our technical team will investigate your issue directly.</p>
            <Button variant="primary" size="large">Submit a Ticket</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportContent;
