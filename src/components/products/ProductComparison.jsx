import React from 'react';
import './ProductComparison.css';

// Only RebarX is a real, released product.
// All other columns represent future roadmap items — not released or in beta.
const features = [
  { name: 'Automatic Reinforcement', rebarx: true },
  { name: 'ETABS Integration', rebarx: true },
  { name: 'Revit Export', rebarx: true },
  { name: 'Drawing Generation', rebarx: true },
  { name: 'Batch Processing', rebarx: true },
];

const Check = () => (
  <div className="pc-check">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

const ProductComparison = () => {
  return (
    <section className="comparison-section">
      <div className="container">
        <div className="pc-header">
          <h2 className="pc-title">RebarX Capabilities</h2>
          <p className="pc-desc">
            What RebarX does today. More products coming to this table as they are released.
          </p>
        </div>
        
        <div className="pc-table-wrapper">
          <table className="pc-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>RebarX</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i}>
                  <td>{f.name}</td>
                  <td>{f.rebarx ? <Check /> : <span style={{color: 'var(--text-muted)'}}>—</span>}</td>
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
