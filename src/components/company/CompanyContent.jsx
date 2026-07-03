import React from 'react';
import './CompanyContent.css';

const CompanyContent = () => {
  return (
    <div className="company-page">
      <section className="company-hero anim-fade-in">
        <div className="container">
          <div className="company-hero-content text-center">
            <h1 className="company-hero-title">Engineering the Future of <br/><span className="text-gradient">Structural Software</span></h1>
            <p className="company-hero-subtitle">
              We are a team of structural engineers and software developers on a mission to eliminate tedious manual detailing and bring structural design into the automation age.
            </p>
          </div>
        </div>
      </section>

      <section className="company-stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box anim-slide-up" style={{animationDelay: '0ms'}}>
              <div className="stat-number">2023</div>
              <div className="stat-desc">Year Founded</div>
            </div>
            <div className="stat-box anim-slide-up" style={{animationDelay: '100ms'}}>
              <div className="stat-number">5M+</div>
              <div className="stat-desc">Tons of Rebar Modeled</div>
            </div>
            <div className="stat-box anim-slide-up" style={{animationDelay: '200ms'}}>
              <div className="stat-number">120+</div>
              <div className="stat-desc">Enterprise Clients</div>
            </div>
            <div className="stat-box anim-slide-up" style={{animationDelay: '300ms'}}>
              <div className="stat-number">15</div>
              <div className="stat-desc">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      <section className="company-nav-section section">
        <div className="container">
          <div className="company-nav-grid">
            <a href="/about" className="company-nav-card anim-slide-up">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3>About Us</h3>
              <p>Learn about our story, our mission, and the leadership team driving Auverion forward.</p>
              <span className="card-link">Read our story →</span>
            </a>

            <a href="/careers" className="company-nav-card anim-slide-up" style={{animationDelay: '100ms'}}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3>Careers</h3>
              <p>Join a fast-growing team tackling some of the hardest problems in AEC tech.</p>
              <span className="card-link">View open roles →</span>
            </a>

            <a href="/press" className="company-nav-card anim-slide-up" style={{animationDelay: '200ms'}}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h3>Press & Media</h3>
              <p>Get the latest news, press releases, and brand assets for Auverion.</p>
              <span className="card-link">Go to Press Room →</span>
            </a>

            <a href="/contact" className="company-nav-card anim-slide-up" style={{animationDelay: '300ms'}}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3>Contact</h3>
              <p>Have a question? Get in touch with our sales, support, or partnership teams.</p>
              <span className="card-link">Contact us →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="offices-section">
        <div className="container">
          <div className="offices-header text-center">
            <h2>Global Presence</h2>
          </div>
          <div className="offices-grid">
            <div className="office-card">
              <div className="office-city">London</div>
              <div className="office-type">Headquarters</div>
              <p>100 Bishopsgate<br/>London, EC2N 4AG<br/>United Kingdom</p>
            </div>
            <div className="office-card">
              <div className="office-city">New York</div>
              <div className="office-type">North America Hub</div>
              <p>1 World Trade Center<br/>New York, NY 10007<br/>United States</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyContent;
