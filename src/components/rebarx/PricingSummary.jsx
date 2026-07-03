import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import './PricingSummary.css';

const PricingSummary = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="ps-header">
          <h2 className="ps-title">Clear, Predictable Licensing</h2>
        </div>
        
        <div className="ps-grid">
          
          {/* Academic Tier */}
          <div className="ps-card">
            <h3 className="ps-tier">Academic</h3>
            <p className="ps-desc">For students and university research labs.</p>
            <div className="ps-price-block">
              <span className="ps-price">Free</span>
            </div>
            <div className="ps-features">
              <div className="ps-feature">
                <svg className="ps-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Full RebarX Engine Access
              </div>
              <div className="ps-feature">
                <svg className="ps-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Educational Watermark
              </div>
              <div className="ps-feature">
                <svg className="ps-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Community Forum Support
              </div>
            </div>
            <div className="ps-button">
              <Button variant="ghost" size="large" as={Link} to="/download" style={{width: '100%'}}>Join Waitlist</Button>
            </div>
          </div>
          
          {/* Professional Tier */}
          <div className="ps-card popular">
            <div className="ps-popular-badge">Most Popular</div>
            <h3 className="ps-tier">Professional</h3>
            <p className="ps-desc">For structural design offices and individual engineers.</p>
            <div className="ps-price-block">
              <span className="ps-price">$195</span><span className="ps-period">/mo</span>
            </div>
            <div className="ps-features">
              <div className="ps-feature">
                <svg className="ps-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Native ETABS & Revit Integration
              </div>
              <div className="ps-feature">
                <svg className="ps-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Unlimited Project Exports
              </div>
              <div className="ps-feature">
                <svg className="ps-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Standard Email Support
              </div>
            </div>
            <div className="ps-button">
              <Button variant="primary" size="large" as={Link} to="/download" style={{width: '100%'}}>Get Early Access</Button>
            </div>
          </div>
          
          {/* Enterprise Tier */}
          <div className="ps-card">
            <h3 className="ps-tier">Enterprise</h3>
            <p className="ps-desc">For large multi-disciplinary BIM and engineering firms.</p>
            <div className="ps-price-block">
              <span className="ps-price">Custom</span>
            </div>
            <div className="ps-features">
              <div className="ps-feature">
                <svg className="ps-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Floating Network Licenses
              </div>
              <div className="ps-feature">
                <svg className="ps-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Custom Code Rules & Scripts
              </div>
              <div className="ps-feature">
                <svg className="ps-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Dedicated Success Manager
              </div>
            </div>
            <div className="ps-button">
              <Button variant="ghost" size="large" as={Link} to="/download" style={{width: '100%'}}>Join Waitlist</Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PricingSummary;
