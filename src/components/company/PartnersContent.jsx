import React from 'react';
import './PartnersContent.css';

const partners = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
];

const PartnersContent = () => {
  return (
    <div className="partners-content container">
      <div className="partners-program anim-slide-up">
        <h2>Auverion Partner Network</h2>
        <p>Join an elite ecosystem of agencies, systems integrators, and technology partners. Together, we can deliver unparalleled value to clients globally.</p>
        <button className="btn-primary">Become a Partner</button>
      </div>

      <div className="trusted-by text-center anim-fade-in" style={{ animationDelay: '200ms' }}>
        <h3 style={{ marginBottom: '48px', color: 'var(--text-muted)' }}>OUR TECHNOLOGY PARTNERS</h3>
        <div className="logos-grid">
          {partners.map((logo, idx) => (
            <img src={logo} alt="Partner Logo" className="partner-logo" key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersContent;
