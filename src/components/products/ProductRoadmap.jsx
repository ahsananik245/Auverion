import React from 'react';
import './ProductRoadmap.css';

const roadmapData = [
  {
    date: 'Q3 2026',
    title: 'RebarX V1.0',
    desc: 'Initial release of RebarX with native ETABS integration and 2D drawing generation.',
    status: 'past',
    position: 'top'
  },
  {
    date: 'Q4 2026',
    title: 'SteelX Beta',
    desc: 'Early access release for intelligent steel connection design.',
    status: 'current',
    position: 'bottom'
  },
  {
    date: 'Q1 2027',
    title: 'Auverion Cloud',
    desc: 'Launch of the collaborative workspace and centralized license management.',
    status: 'future',
    position: 'top'
  },
  {
    date: 'Q2 2027',
    title: 'FoundationX',
    desc: 'Alpha release of automated deep and shallow foundation systems.',
    status: 'future',
    position: 'bottom'
  },
  {
    date: 'Q3 2027',
    title: 'Developer SDK',
    desc: 'Public API release allowing enterprise teams to script custom workflows.',
    status: 'future',
    position: 'top'
  },
  {
    date: 'Q4 2027',
    title: 'BridgeX',
    desc: 'Initial tools for parametric bridge alignment and modeling.',
    status: 'future',
    position: 'bottom'
  }
];

const ProductRoadmap = () => {
  return (
    <section className="roadmap-section">
      <div className="container">
        <div className="rm-header">
          <h2 className="rm-title">Product Roadmap</h2>
        </div>
        
        <div className="rm-container">
          <div className="rm-timeline">
            <div className="rm-line"></div>
            <div className="rm-line-active"></div>
            
            {roadmapData.map((item, index) => (
              <div className={`rm-node ${item.status} ${item.position}`} key={index}>
                <div className="rm-dot"></div>
                <div className="rm-content">
                  <div className="rm-date">{item.date}</div>
                  <h3 className="rm-node-title">{item.title}</h3>
                  <p className="rm-node-desc">{item.desc}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRoadmap;
