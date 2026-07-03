import React from 'react';
import Button from '../ui/Button';
import './EnterpriseContent.css';

const EnterpriseContent = () => {
  return (
    <div className="enterprise-page">
      <section className="enterprise-hero anim-fade-in">
        <div className="container">
          <div className="enterprise-hero-grid">
            <div className="enterprise-hero-content">
              <div className="badge">Auverion Enterprise</div>
              <h1 className="enterprise-title">Scale Engineering Automation Across Your Organization</h1>
              <p className="enterprise-subtitle">
                Advanced security, dedicated support, and custom integrations tailored for ENR Top 500 engineering firms.
              </p>
              <div className="enterprise-actions">
                <Button variant="primary" size="large">Contact Sales</Button>
                <Button variant="ghost" size="large">View ROI Calculator</Button>
              </div>
            </div>
            <div className="enterprise-hero-visual">
              <div className="glass-panel">
                <div className="stat-row">
                  <span className="stat-label">Deployment</span>
                  <span className="stat-value">Cloud or On-Prem</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">SSO Integration</span>
                  <span className="stat-value">SAML / OAuth 2.0</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">SLA Guarantee</span>
                  <span className="stat-value">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="enterprise-features section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Enterprise-Grade Capabilities</h2>
            <p>Everything you need to deploy RebarX securely at scale.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card anim-slide-up" style={{animationDelay: '0ms'}}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3>Advanced Security & SSO</h3>
              <p>Secure your IP with Single Sign-On, role-based access control (RBAC), and detailed audit logs. Fully SOC2 Type II compliant.</p>
            </div>
            
            <div className="feature-card anim-slide-up" style={{animationDelay: '100ms'}}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3>Network Licensing</h3>
              <p>Flexible floating licenses that can be shared across global offices. Track usage analytics and optimize license allocation.</p>
            </div>

            <div className="feature-card anim-slide-up" style={{animationDelay: '200ms'}}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3>Priority Support & SLA</h3>
              <p>Get direct access to our structural engineers with a guaranteed 2-hour response time and dedicated Technical Account Manager.</p>
            </div>
            
            <div className="feature-card anim-slide-up" style={{animationDelay: '300ms'}}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <h3>Custom Rule Development</h3>
              <p>Our team works directly with your BIM managers to digitize your firm's proprietary detailing standards into the RebarX engine.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="security-section">
        <div className="container">
          <div className="security-banner">
            <div className="security-content">
              <h2>Committed to Security & Compliance</h2>
              <p>We understand that your engineering models are your most valuable IP. That's why RebarX is built from the ground up with enterprise security in mind.</p>
              <div className="compliance-badges">
                <div className="c-badge">SOC 2 Type II</div>
                <div className="c-badge">ISO 27001</div>
                <div className="c-badge">GDPR Compliant</div>
              </div>
            </div>
            <div className="security-illustration">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10L10 25V50C10 75 25 90 50 100C75 90 90 75 90 50V25L50 10Z" fill="url(#grad)" stroke="var(--accent-blue)" strokeWidth="2"/>
                <circle cx="50" cy="50" r="15" fill="var(--bg-primary)" stroke="var(--accent-blue)" strokeWidth="2"/>
                <path d="M45 50L48 53L55 46" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="grad" x1="50" y1="10" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(59, 130, 246, 0.2)" />
                    <stop offset="1" stopColor="rgba(59, 130, 246, 0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseContent;
