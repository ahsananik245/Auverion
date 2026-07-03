import React from 'react';
import './PressContent.css';

const pressReleases = [
  { date: "October 12, 2026", title: "Auverion Secures $150M Series D to Expand AI Capabilities", pub: "TechCrunch" },
  { date: "August 04, 2026", title: "Auverion Named Leader in Gartner Magic Quadrant for App Platforms", pub: "Gartner Press" },
  { date: "May 22, 2026", title: "Introducing RebarX: The Next Generation React Framework", pub: "Auverion Blog" },
  { date: "January 15, 2026", title: "Auverion Achieves 100% Carbon Neutrality Ahead of Schedule", pub: "Forbes" },
];

const PressContent = () => {
  return (
    <div className="press-content container">
      <div className="press-header text-center anim-fade-in" style={{ marginBottom: '48px' }}>
        <h2>Latest News & Press Releases</h2>
        <p className="text-secondary" style={{ marginTop: '16px' }}>Stay up to date with Auverion's latest announcements and media mentions.</p>
      </div>

      <div className="press-grid">
        {pressReleases.map((press, idx) => (
          <a href="#" className="press-item anim-slide-up" key={idx} style={{ animationDelay: `${idx * 100}ms` }}>
            <div>
              <span className="press-date">{press.date}</span>
              <h3 className="press-title">{press.title}</h3>
              <span className="press-publication">Featured in: {press.pub}</span>
            </div>
            <div className="read-more">
              Read Article &rarr;
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PressContent;
