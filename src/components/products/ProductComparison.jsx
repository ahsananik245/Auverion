import React from 'react';
import './ProductComparison.css';

const features = [
  { name: 'Automatic Reinforcement', rebarx: true, steelx: false, foundx: true },
  { name: 'ETABS Integration', rebarx: true, steelx: true, foundx: true },
  { name: 'Revit Export', rebarx: true, steelx: true, foundx: true },
  { name: 'Drawing Generation', rebarx: true, steelx: true, foundx: true },
  { name: 'Tekla Structures Integration', rebarx: false, steelx: true, foundx: false },
  { name: 'Batch Processing', rebarx: true, steelx: false, foundx: false },
  { name: 'Cloud Sync', rebarx: 'Coming 2026', steelx: 'Coming 2026', foundx: 'Coming 2026' }
];

const Check = () => (
  <div className="pc-check">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

const Dash = () => <div className="pc-dash">-</div>;

const ProductComparison = () => {
  return (
    <section className="comparison-section">
      <div className="container">
        <div className="pc-header">
          <h2 className="pc-title">Product Capabilities</h2>
          <p className="pc-desc">
            Compare the core functionalities across our current and upcoming engineering solutions.
          </p>
        </div>
        
        <div className="pc-table-wrapper">
          <table className="pc-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>RebarX (Beta)</th>
                <th>SteelX (Beta)</th>
                <th>FoundationX</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i}>
                  <td>{f.name}</td>
                  <td>{typeof f.rebarx === 'boolean' ? (f.rebarx ? <Check /> : <Dash />) : f.rebarx}</td>
                  <td>{typeof f.steelx === 'boolean' ? (f.steelx ? <Check /> : <Dash />) : f.steelx}</td>
                  <td>{typeof f.foundx === 'boolean' ? (f.foundx ? <Check /> : <Dash />) : f.foundx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
