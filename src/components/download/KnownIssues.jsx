import React, { useState } from 'react';
import './KnownIssues.css';

const issues = [
  {
    id: 1,
    title: 'Silent crash during IFC4 export on models > 2GB',
    status: 'critical',
    statusText: 'Critical',
    affectedVersion: 'v1.8.2',
    workaround: 'Export using IFC2x3 format or split the model into smaller zones before exporting.',
    expectedFix: 'Hotfix v1.8.3 (Expected Nov 2026)'
  },
  {
    id: 2,
    title: 'Floating license server disconnects on VPN IP change',
    status: 'open',
    statusText: 'Open',
    affectedVersion: 'v1.8.x',
    workaround: 'Restart the Auverion License Service in Windows Services (services.msc).',
    expectedFix: 'v1.9.0'
  },
  {
    id: 3,
    title: 'Custom Python hooks fail to execute post-import',
    status: 'resolved',
    statusText: 'Resolved',
    affectedVersion: 'v1.8.0 - v1.8.1',
    workaround: 'None required.',
    expectedFix: 'Fixed in v1.8.2'
  },
  {
    id: 4,
    title: 'Missing tooltips on the Retaining Wall parametric menu',
    status: 'open',
    statusText: 'Open',
    affectedVersion: 'v1.8.2',
    workaround: 'Refer to page 45 of the User Manual for parameter definitions.',
    expectedFix: 'v1.9.0'
  }
];

const KnownIssues = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIssues = issues.filter(issue => 
    issue.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    issue.workaround.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="known-issues">
      <div className="container">
        
        <div className="ki-header">
          <h3 className="ki-section-title">Known Issues Tracker</h3>
          <div className="ki-search">
            <svg className="ki-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input 
              type="text" 
              className="ki-search-input" 
              placeholder="Search issues..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="ki-grid">
          {filteredIssues.map(issue => (
            <div className="ki-card" key={issue.id}>
              <div className="ki-card-header">
                <h4 className="ki-issue-title">{issue.title}</h4>
                <span className={`ki-status ${issue.status}`}>{issue.statusText}</span>
              </div>
              
              <div className="ki-details">
                <div className="ki-detail-row">
                  <span className="ki-detail-label">Affected Version:</span>
                  <span className="ki-detail-value">{issue.affectedVersion}</span>
                </div>
                <div className="ki-detail-row">
                  <span className="ki-detail-label">Workaround:</span>
                  <span className="ki-detail-value">{issue.workaround}</span>
                </div>
                <div className="ki-detail-row">
                  <span className="ki-detail-label">Expected Fix:</span>
                  <span className="ki-detail-value">{issue.expectedFix}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredIssues.length === 0 && (
          <div style={{textAlign: 'center', color: 'var(--text-muted)', padding: '48px 0'}}>
            No known issues found matching your search.
          </div>
        )}
        
      </div>
    </section>
  );
};

export default KnownIssues;
