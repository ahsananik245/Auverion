import React from 'react';
import './CareersContent.css';

const jobs = [
  { title: "Senior Frontend Engineer", location: "Remote", type: "Full-Time", dept: "Engineering" },
  { title: "Product Designer", location: "New York, NY", type: "Full-Time", dept: "Design" },
  { title: "Developer Advocate", location: "San Francisco, CA", type: "Full-Time", dept: "Marketing" },
  { title: "Site Reliability Engineer", location: "Remote", type: "Full-Time", dept: "Engineering" },
];

const CareersContent = () => {
  return (
    <div className="careers-content container">
      <section className="careers-intro anim-slide-up">
        <div>
          <h2>Join the Auverion Team</h2>
          <p className="text-secondary" style={{ marginTop: '16px', fontSize: 'var(--text-body-large)' }}>
            We're always looking for talented individuals who share our vision and passion. At Auverion, you'll have the autonomy to do your best work and the support to grow your career.
          </p>
          <div className="careers-perks">
            <span className="perk-badge">🏠 Remote-First</span>
            <span className="perk-badge">🏥 Comprehensive Health</span>
            <span className="perk-badge">✈️ Unlimited PTO</span>
            <span className="perk-badge">📚 Learning Stipend</span>
            <span className="perk-badge">💻 Top-Tier Gear</span>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=800&q=80" alt="Working at Auverion" style={{ width: '100%', borderRadius: 'var(--radius-image)' }} />
        </div>
      </section>

      <section className="open-positions anim-fade-in" style={{ animationDelay: '200ms' }}>
        <h3 style={{ marginBottom: '32px' }}>Open Positions ({jobs.length})</h3>
        <div className="jobs-list">
          {jobs.map((job, idx) => (
            <div className="job-card" key={idx}>
              <div>
                <h4 className="job-title">{job.title}</h4>
                <div className="job-meta">
                  <span>📍 {job.location}</span>
                  <span>💼 {job.type}</span>
                  <span>🏢 {job.dept}</span>
                </div>
              </div>
              <button className="job-apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareersContent;
