import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { REBARX_CHECKOUT_URL } from '../../config/links';
import './PricingTiers.css';

const PricingTiers = () => {
  return (
    <section className="pricing-tiers-section">
      <div className="container">
        
        <div className="pt-grid">
          
          {/* Academic Tier */}
          <div className="pt-card">
            <h3 className="pt-tier">Academic</h3>
            <p className="pt-desc">For students, educators, and university research labs.</p>
            <div className="pt-price-block">
              <span className="pt-price">Free</span>
            </div>
            
            <div className="pt-features-title">What's included</div>
            <div className="pt-features">
              <div className="pt-feature">
                <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Full Access to RebarX
              </div>
              <div className="pt-feature">
                <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Educational Watermark on Exports
              </div>
              <div className="pt-feature">
                <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Community Forum Support
              </div>
            </div>
            <div className="pt-button">
              <Button variant="ghost" size="large" as={Link} to="/download" style={{width: '100%'}}>Join Waitlist</Button>
            </div>
          </div>
          
          {/* Professional Tier */}
          <div className="pt-card popular">
            <div className="pt-popular-badge">Most Popular</div>
            <h3 className="pt-tier">Professional Suite</h3>
            <p className="pt-desc">For structural design offices and individual engineers.</p>
            <div className="pt-price-block">
              <span className="pt-price">$295</span><span className="pt-period">/user/mo</span>
            </div>
            
            <div className="pt-features-title">Everything in Academic, plus</div>
            <div className="pt-features">
              <div className="pt-feature">
                <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Commercial Use License
              </div>
              <div className="pt-feature">
                <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Native ETABS and Revit Integration
              </div>
              <div className="pt-feature">
                <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Unlimited Project Exports & Drawing Generation
              </div>
              <div className="pt-feature">
                <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Standard Email Support
              </div>
            </div>
            <div className="pt-button">
              <Button variant="primary" size="large" as="a" href={REBARX_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" style={{width: '100%'}}>Buy Now</Button>
            </div>
          </div>
          
          {/* Enterprise Tier */}
          <div className="pt-card">
            <h3 className="pt-tier">Enterprise</h3>
            <p className="pt-desc">For large multi-disciplinary BIM and engineering firms.</p>
            <div className="pt-price-block">
              <span className="pt-price">Custom</span>
            </div>
            
            <div className="pt-features-title">Everything in Professional, plus</div>
            <div className="pt-features">
              <div className="pt-feature">
                <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Floating Network Licenses (On-Premise or Cloud)
              </div>
              <div className="pt-feature">
                <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Developer SDK API Access
              </div>
              <div className="pt-feature">
                <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Custom Scripting and Rule Implementation
              </div>
              <div className="pt-feature">
                <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Dedicated Success Manager & Training
              </div>
            </div>
            <div className="pt-button">
              <Button variant="ghost" size="large" as={Link} to="/download" style={{width: '100%'}}>Join Waitlist</Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
