import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './FeaturedProduct.css';

const FeaturedProduct = () => {
  return (
    <section className="featured-product" id="revin">
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

            <h2 className="featured-title">Revin</h2>
            <h3 className="featured-subtitle">Offline AI Assistant for<br/>Modeling &amp; Documentation</h3>

            <p className="featured-desc">
              A native Revit plugin with a bundled, fine-tuned AI model that runs fully offline. Automate modeling and documentation with plain-language requests — no cloud, no API key, your data never leaves your machine.
            </p>

            <div className="featured-buttons">
              <Button as={Link} to="/products/revin" variant="primary" size="large">
                Meet Revin
              </Button>
              <Button as={Link} to="/download" variant="ghost" size="large">Download</Button>
            </div>
            
            <div className="featured-stats">
              <div>
                <div className="featured-stat-number">100%</div>
                <div className="featured-stat-label">Offline</div>
              </div>
              <div>
                <div className="featured-stat-number">100+</div>
                <div className="featured-stat-label">Automation Tools</div>
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
              <span className="compat-chip">Bundled AI Model</span>
              <span className="compat-chip">Revit Plugin</span>
              <span className="compat-chip">Plain Language</span>
              <span className="compat-chip">Windows 64-bit</span>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
