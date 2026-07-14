import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { REBARX_CHECKOUT_URL } from '../../config/links';
import './PricingTiers.css';

const Check = () => (
  <svg className="pt-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const PricingTiers = () => {
  return (
    <section className="pricing-tiers-section">
      <div className="container">

        {/* Launch Discount Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0,180,255,0.12), rgba(0,120,200,0.08))',
          border: '1px solid rgba(0,180,255,0.3)',
          borderRadius: 'var(--radius-card)',
          padding: '16px 24px',
          marginBottom: '48px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontSize: '1.2rem' }}>🎉</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
            Launch offer: use code{' '}
            <code style={{
              background: 'rgba(0,180,255,0.15)',
              color: 'var(--accent-primary)',
              padding: '2px 8px',
              borderRadius: '4px',
              fontFamily: 'monospace',
              fontSize: '1rem',
              letterSpacing: '0.05em'
            }}>LAUNCH50</code>
            {' '}at checkout for 50% off your first purchase.
          </span>
        </div>

        <div className="pt-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: '800px', margin: '0 auto' }}>

          {/* Professional Tier */}
          <div className="pt-card popular">
            <div className="pt-popular-badge">RebarX Professional</div>
            <h3 className="pt-tier">Professional Suite</h3>
            <p className="pt-desc">For structural design offices and individual engineers using RebarX commercially.</p>
            <div className="pt-price-block">
              <span className="pt-price">$100</span><span className="pt-period">/user/mo</span>
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: '24px' }}>
              or <strong style={{ color: 'var(--text-secondary)' }}>$1,000/user/year</strong> (save 2 months)
            </div>

            <div className="pt-features-title">What's included</div>
            <div className="pt-features">
              <div className="pt-feature"><Check />Commercial Use License</div>
              <div className="pt-feature"><Check />Native ETABS and Revit Integration</div>
              <div className="pt-feature"><Check />Automatic Reinforcement Generation</div>
              <div className="pt-feature"><Check />Unlimited Project Exports &amp; Drawing Generation</div>
              <div className="pt-feature"><Check />Standard Email Support</div>
            </div>
            <div className="pt-button">
              <Button variant="primary" size="large" as="a" href={REBARX_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" style={{width: '100%'}}>
                Buy Now
              </Button>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textAlign: 'center', marginTop: '12px' }}>
              Use code <strong>LAUNCH50</strong> for 50% off
            </p>
          </div>

          {/* Enterprise Tier */}
          <div className="pt-card">
            <h3 className="pt-tier">Enterprise</h3>
            <p className="pt-desc">For large multi-disciplinary BIM and engineering firms with advanced needs.</p>
            <div className="pt-price-block">
              <span className="pt-price">Custom</span>
            </div>

            <div className="pt-features-title">Everything in Professional, plus</div>
            <div className="pt-features">
              <div className="pt-feature"><Check />Floating Network Licenses (On-Premise or Cloud)</div>
              <div className="pt-feature"><Check />Developer SDK API Access</div>
              <div className="pt-feature"><Check />Custom Scripting and Rule Implementation</div>
              <div className="pt-feature"><Check />Dedicated Success Manager &amp; Training</div>
            </div>
            <div className="pt-button">
              <Button variant="ghost" size="large" as={Link} to="/company/contact" style={{width: '100%'}}>Contact Us</Button>
            </div>
          </div>

        </div>

        {/* Academic note */}
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', marginTop: '40px' }}>
          Academic / student pricing is planned for a future release. Not yet available.
        </p>

      </div>
    </section>
  );
};

export default PricingTiers;
