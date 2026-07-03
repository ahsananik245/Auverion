import React from 'react';
import { Link } from 'react-router-dom';
import './ProductEcosystem.css';

const products = [
  {
    name: 'RebarX',
    tagline: 'Structural Reinforcement Automation',
    desc: 'Automates reinforcement modeling and detailing from structural analysis directly to final 2D drawings and BOQ.',
    features: ['Native ETABS Support', 'Native Revit Support', 'Automatic Reinforcement', 'Drawing Generation'],
    status: 'Released',
    icon: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
    link: '/products/rebarx'
  },
  {
    name: 'SteelX',
    tagline: 'Steel Connection Automation',
    desc: 'Intelligent design and detailing of steel connections, seamlessly bridging the gap between analysis and fabrication models.',
    features: ['Auto Connection Design', 'Code Compliance Checking', 'Tekla Integration', 'Detailing Reports'],
    status: 'Beta',
    icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
    link: '#'
  },
  {
    name: 'FoundationX',
    tagline: 'Foundation Design Automation',
    desc: 'Automated design, detailing, and scheduling of complex deep and shallow foundation systems.',
    features: ['Pile Cap Optimization', 'Mat Foundation Detailing', 'Geotechnical Integration', 'Cost Estimation'],
    status: 'Coming Soon',
    icon: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8c-2 0-3 1-3 3v15c0 1.5.5 2 2 2z M4 22h4 M12 2v20',
    link: '#'
  },
  {
    name: 'BridgeX',
    tagline: 'Bridge Infrastructure Detailing',
    desc: 'Parametric modeling and automated reinforcement for complex bridge structures and civil infrastructure.',
    features: ['Parametric Alignment', 'Pre-stressed Concrete', 'Tendon Modeling', 'AASHTO Checks'],
    status: 'Coming Soon',
    icon: 'M2 12h20 M4 12v8 M10 12v8 M14 12v8 M20 12v8 M6 4h12 M12 4v8',
    link: '#'
  },
  {
    name: 'Cloud',
    tagline: 'Collaborative Project Workspace',
    desc: 'A unified cloud platform to share projects, manage licenses, and run massive batch processing operations remotely.',
    features: ['Centralized Storage', 'Batch Automation API', 'License Management', 'Version Control'],
    status: 'Beta',
    icon: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
    link: '#'
  },
  {
    name: 'Developer SDK',
    tagline: 'Custom Automation API',
    desc: 'Extend the Auverion platform with custom scripts and tools tailored specifically for your organization\'s unique workflows.',
    features: ['Python & C# Bindings', 'Headless Engine Access', 'Custom Workflows', 'Enterprise Support'],
    status: 'Coming Soon',
    icon: 'M16 18l6-6-6-6 M8 6l-6 6 6 6 M12 2l-4 20',
    link: '#'
  }
];

const ProductEcosystem = () => {
  return (
    <section className="ecosystem-section" id="ecosystem">
      <div className="container">
        <div className="ecosystem-grid">
          {products.map((product, index) => {
            const statusClass = product.status.toLowerCase().replace(' ', '-');
            const isDisabled = product.status === 'Coming Soon';
            
            return (
              <div className="eco-card" key={index}>
                <div className="eco-card-header">
                  <svg className="eco-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={product.icon}></path>
                  </svg>
                  <span className={`eco-card-badge ${statusClass}`}>
                    {product.status}
                  </span>
                </div>
                
                <h3 className="eco-card-title">{product.name}</h3>
                <div className="eco-card-tagline">{product.tagline}</div>
                <p className="eco-card-desc">{product.desc}</p>
                
                <div className="eco-card-features">
                  <ul>
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={product.link} 
                  className={`eco-card-explore ${isDisabled ? 'disabled' : ''}`}
                  onClick={(e) => isDisabled && e.preventDefault()}
                >
                  Explore {product.name}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductEcosystem;
