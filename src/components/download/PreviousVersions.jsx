import React, { useState, useEffect } from 'react';

import './PreviousVersions.css';

const PreviousVersions = () => {
  const versions = [
    { version: "1.9.0", date: "Jan 15, 2026", size: "450 MB", status: "supported", statusText: "Supported" },
    { version: "1.8.5", date: "Nov 02, 2025", size: "445 MB", status: "supported", statusText: "Supported" },
    { version: "1.7.0", date: "Jul 20, 2025", size: "430 MB", status: "legacy", statusText: "Legacy (No Updates)" }
  ];
  const loading = false;

  if (loading) return null;

  return (
    <section className="previous-versions">
      <div className="container">
        
        <h3 className="pv-section-title">Previous Versions</h3>
        
        <div className="pv-table-container">
          <table className="pv-table">
            <thead>
              <tr>
                <th>Version</th>
                <th>Release Date</th>
                <th>Size</th>
                <th>Status</th>
                <th>Documentation</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {versions.map((v, idx) => (
                <tr key={idx}>
                  <td className="pv-version">v{v.version}</td>
                  <td className="pv-date">{v.date}</td>
                  <td className="pv-size">{v.size}</td>
                  <td>
                    <span className={`pv-status ${v.status}`}>
                      <span className="pv-status-dot"></span>
                      {v.statusText}
                    </span>
                  </td>
                  <td>
                    <span className="pv-link disabled">Coming Soon</span>
                  </td>
                  <td>
                    <span className="pv-link disabled">Coming Soon</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </section>
  );
};

export default PreviousVersions;
