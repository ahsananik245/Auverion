import React from 'react';
import Button from '../ui/Button';
import './FeaturedProduct.css';

const FeaturedProduct = () => {
  return (
    <section className="featured-product" id="rebarx">
      <div className="container">
        <div className="featured-content">
          
          <div className="featured-left">
            <div className="featured-screenshot">
              <div className="fs-header">
                <div className="fs-dot"></div>
                <div className="fs-dot"></div>
                <div className="fs-dot"></div>
              </div>
              <div className="fs-body">
                <div className="fs-sidebar"></div>
                <div className="fs-main"></div>
              </div>
            </div>
          </div>
          
          <div className="featured-right">
            <div className="featured-badge">FLAGSHIP PRODUCT</div>
            
            <h2 className="featured-title">RebarX</h2>
            <h3 className="featured-subtitle">Structural Reinforcement<br/>Automation Platform</h3>
            
            <p className="featured-desc">
              Automate reinforcement workflows from ETABS to Revit with intelligent engineering automation designed for structural professionals.
            </p>
            
            <div className="featured-buttons">
              <Button variant="primary" size="large">Download RebarX</Button>
              <Button variant="ghost" size="large">Read Documentation</Button>
            </div>
            
            <div className="featured-stats">
              <div>
                <div className="featured-stat-number">20x</div>
                <div className="featured-stat-label">Faster</div>
              </div>
              <div>
                <div className="featured-stat-number">98%</div>
                <div className="featured-stat-label">Automation Accuracy</div>
              </div>
              <div>
                <div className="featured-stat-number">100%</div>
                <div className="featured-stat-label">Plugin</div>
              </div>
              <div>
                <div className="featured-stat-number">Windows</div>
                <div className="featured-stat-label">Native</div>
              </div>
            </div>
            
            <div className="featured-compat">
              <span className="compat-chip">ETABS</span>
              <span className="compat-chip">Revit</span>
              <span className="compat-chip">EXR</span>
              <span className="compat-chip">Windows 64 Bit</span>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
