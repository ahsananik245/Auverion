import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyContent.css';

const CompanyContent = () => {
  return (
    <div className="company-page">
      <section className="company-hero anim-fade-in">
        <div className="container">
          <div className="company-hero-content text-center">
            <h1 className="company-hero-title">Engineering the Future of <br/><span className="text-gradient">Structural Software</span></h1>
            <p className="company-hero-subtitle">
              We're building software to eliminate tedious manual detailing and bring structural design into the automation age — starting with RebarX.
            </p>
          </div>
        </div>
      </section>

      <section className="company-nav-section section">
        <div className="container">
          <div className="company-nav-grid">
            <Link to="/company/about" className="company-nav-card anim-slide-up">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3>About Us</h3>
              <p>Learn about our story and what we're building at Auverion.</p>
              <span className="card-link">Read our story →</span>
            </Link>

            <Link to="/company/careers" className="company-nav-card anim-slide-up" style={{animationDelay: '100ms'}}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3>Careers</h3>
              <p>Interested in working with us? We'll post real openings here when we're hiring.</p>
              <span className="card-link">View opportunities →</span>
            </Link>

            <Link to="/company/press" className="company-nav-card anim-slide-up" style={{animationDelay: '200ms'}}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h3>Press &amp; Media</h3>
              <p>Press inquiries and announcements — updated as real coverage appears.</p>
              <span className="card-link">Go to Press Room →</span>
            </Link>

            <Link to="/company/contact" className="company-nav-card anim-slide-up" style={{animationDelay: '300ms'}}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3>Contact</h3>
              <p>Have a question? Reach out directly via email or our contact form.</p>
              <span className="card-link">Contact us →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyContent;
