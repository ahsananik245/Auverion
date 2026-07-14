import React from 'react';
import './FutureProducts.css';

// These are genuine roadmap aspirations, not released or in-development products with confirmed specs.
const futures = [
  {
    name: 'FoundationX',
    desc: 'Automated design and detailing of complex deep and shallow foundation systems.',
    icon: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8c-2 0-3 1-3 3v15c0 1.5.5 2 2 2z'
  },
  {
    name: 'BridgeX',
    desc: 'Parametric modeling and automated reinforcement for civil infrastructure.',
    icon: 'M2 12h20 M4 12v8 M10 12v8 M14 12v8 M20 12v8 M6 4h12 M12 4v8'
  },
  {
    name: 'SteelX',
    desc: 'Intelligent design and detailing of steel connections and fabrication models.',
    icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'
  },
  {
    name: 'DesignX',
    desc: 'Generative AI structural design assistant and topology optimization engine.',
    icon: 'M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  },
  {
    name: 'Auverion Cloud',
    desc: 'Collaborative project workspace and batch automation pipeline.',
    icon: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'
  },
  {
    name: 'Developer SDK',
    desc: 'Custom automation API with Python and C# bindings for enterprise teams.',
    icon: 'M16 18l6-6-6-6 M8 6l-6 6 6 6 M12 2l-4 20'
  }
];

const FutureProducts = () => {
  return (
    <section className="future-products">
      <div className="container">
        <div className="fp-header">
          <h2 className="fp-title">Expanding the Platform</h2>
          <p className="fp-desc">
            These are the tools we intend to build next. Nothing here is released or in active beta — they are roadmap aspirations that will be announced formally when ready.
          </p>
        </div>
        
        <div className="fp-grid">
          {futures.map((item, index) => (
            <div className="fp-card" key={index}>
              <div className="fp-ribbon">Planned</div>
              <svg className="fp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon}></path>
              </svg>
              <h3 className="fp-card-title">{item.name}</h3>
              <p className="fp-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureProducts;
