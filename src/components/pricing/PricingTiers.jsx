import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { REBARX_CHECKOUT_URL, REVIN_CHECKOUT_URL } from '../../config/links';
import './PricingTiers.css';

// Buy externally if a Lemon Squeezy URL is configured, else route to the product page.
const revinBuy = REVIN_CHECKOUT_URL
  ? { as: 'a', href: REVIN_CHECKOUT_URL, target: '_blank', rel: 'noopener noreferrer' }
  : { as: Link, to: '/products/revin' };

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

        <div className="pt-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: '1100px', margin: '0 auto' }}>

          {/* Revin — featured */}
          <div className="pt-card popular">
            <div className="pt-popular-badge">Revin · Featured</div>
            <h3 className="pt-tier">Revin</h3>
            <p className="pt-desc">Offline AI assistant for Revit. Free to start; Pro unlocks autonomous multi-step automation.</p>
            <div className="pt-price-block">
              <span className="pt-price">$29</span><span className="pt-period">/mo</span>
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: '24px' }}>
              or <strong style={{ color: 'var(--text-secondary)' }}>$249/year</strong> (28% off) · Free tier available
            </div>

            <div className="pt-features-title">What's included</div>
            <div className="pt-features">
              <div className="pt-feature"><Check />Bundled offline AI model</div>
              <div className="pt-feature"><Check />Autonomous multi-step tasks</div>
              <div className="pt-feature"><Check />All 100+ automation tools</div>
              <div className="pt-feature"><Check />RebarX integration &amp; priority support</div>
            </div>
            <div className="pt-button">
              <Button variant="primary" size="large" {...revinBuy} style={{width: '100%'}}>
                Get Revin
              </Button>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textAlign: 'center', marginTop: '12px' }}>
              Limited Founder lifetime plan — see the <Link to="/products/revin">Revin page</Link>
            </p>
          </div>

          {/* RebarX */}
          <div className="pt-card">
            <h3 className="pt-tier">RebarX Professional</h3>
            <p className="pt-desc">For structural design offices and engineers using RebarX commercially.</p>
            <div className="pt-price-block">
              <span className="pt-price">$100</span><span className="pt-period">/user/mo</span>
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: '24px' }}>
              or <strong style={{ color: 'var(--text-secondary)' }}>$1,000/user/year</strong> (save 2 months)
            </div>

            <div className="pt-features-title">What's included</div>
            <div className="pt-features">
              <div className="pt-feature"><Check />Commercial use license</div>
              <div className="pt-feature"><Check />Native ETABS &amp; Revit integration</div>
              <div className="pt-feature"><Check />Automatic reinforcement generation</div>
              <div className="pt-feature"><Check />Unlimited exports &amp; drawing generation</div>
            </div>
            <div className="pt-button">
              <Button variant="ghost" size="large" as="a" href={REBARX_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" style={{width: '100%'}}>
                Buy RebarX
              </Button>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textAlign: 'center', marginTop: '12px' }}>
              Use code <strong>LAUNCH50</strong> for 50% off
            </p>
          </div>

          {/* Enterprise */}
          <div className="pt-card">
            <h3 className="pt-tier">Enterprise</h3>
            <p className="pt-desc">For firms with air-gapped, NDA, or multi-disciplinary requirements across the suite.</p>
            <div className="pt-price-block">
              <span className="pt-price">Custom</span>
            </div>

            <div className="pt-features-title">Everything in Pro, plus</div>
            <div className="pt-features">
              <div className="pt-feature"><Check />Floating / volume licenses (on-prem or cloud)</div>
              <div className="pt-feature"><Check />Fully offline / air-gapped deployment</div>
              <div className="pt-feature"><Check />Custom tools &amp; firm QC rules</div>
              <div className="pt-feature"><Check />Dedicated success manager &amp; training</div>
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
