import React, { useState, useEffect } from 'react';

import './ReleaseNotes.css';

const ReleaseNotes = () => {
  const [activeVersion, setActiveVersion] = useState('1.8');
  const releaseData = {
    "1.8": {
      date: "Jan 15, 2026",
      new: ["Feature 1", "Feature 2"],
      improved: ["Improvement 1"],
      fixed: ["Bug fix 1"]
    }
  };
  const loading = false;

  if (loading || !releaseData) return null;

  return (
    <section className="release-notes">
      <div className="container">
        
        <div className="rn-header">
          <h2 className="rn-section-title">Release Notes</h2>
          <p className="rn-section-subtitle">Detailed history of updates, improvements, and bug fixes.</p>
        </div>
        
        <div className="rn-container">
          <div className="rn-sidebar">
            <div className="rn-sidebar-title">Version History</div>
            {Object.keys(releaseData).map(version => (
              <button 
                key={version}
                className={`rn-version-btn ${activeVersion === version ? 'active' : ''}`}
                onClick={() => setActiveVersion(version)}
              >
                Version {version}
              </button>
            ))}
          </div>
          
          <div className="rn-content">
            <div className="rn-release-header">
              <h3 className="rn-release-title">Version {activeVersion} Highlights</h3>
              <div className="rn-release-date">Released on {releaseData[activeVersion].date}</div>
            </div>
            
            {releaseData[activeVersion].new && (
              <div className="rn-category">
                <div className="rn-category-title">
                  <svg className="rn-icon-new" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                  New Features
                </div>
                <ul className="rn-list">
                  {releaseData[activeVersion].new.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            )}
            
            {releaseData[activeVersion].improved && (
              <div className="rn-category">
                <div className="rn-category-title">
                  <svg className="rn-icon-improved" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  Improvements
                </div>
                <ul className="rn-list">
                  {releaseData[activeVersion].improved.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            )}
            
            {releaseData[activeVersion].fixed && (
              <div className="rn-category">
                <div className="rn-category-title">
                  <svg className="rn-icon-fixed" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  Bug Fixes
                </div>
                <ul className="rn-list">
                  {releaseData[activeVersion].fixed.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            )}
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ReleaseNotes;
