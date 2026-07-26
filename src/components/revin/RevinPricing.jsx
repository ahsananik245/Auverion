import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { REVIN_CHECKOUT_URL, REVIN_FOUNDER_CHECKOUT_URL } from '../../config/links';
// Reuse the RebarX pricing styling so Revin matches the site system.
import '../rebarx/PricingSummary.css';
import './RevinPricing.css';

// If a Lemon Squeezy URL is configured, buy externally; otherwise fall back to the
// waitlist so no button is ever dead while the products are being set up.
const buyProps = (url) =>
  url
    ? { as: 'a', href: url, target: '_blank', rel: 'noopener noreferrer' }
    : { as: Link, to: '/download' };

const Check = () => (
  <svg className="ps-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const RevinPricing = () => {
  return (
    <section className="pricing-section" id="revin-pricing">
      <div className="container">
        <div className="ps-header">
          <h2 className="ps-title">Simple, Offline-First Licensing</h2>
        </div>

        {/* Founder / early-adopter lifetime deal */}
        <div className="revin-founder-banner">
          <div className="revin-founder-text">
            <span className="revin-founder-tag">FOUNDER'S EDITION</span>
            <strong>Lifetime Revin Pro for $299, one payment.</strong> Limited to the first 50 seats — less than a year of Pro, and you lock in every future update forever.
          </div>
          <Button variant="primary" {...buyProps(REVIN_FOUNDER_CHECKOUT_URL)}>Claim a Founder Seat</Button>
        </div>

        <div className="ps-grid">

          {/* Free Tier */}
          <div className="ps-card">
            <h3 className="ps-tier">Free</h3>
            <p className="ps-desc">The full offline assistant for individual, casual use.</p>
            <div className="ps-price-block">
              <span className="ps-price">$0</span>
            </div>
            <div className="ps-features">
              <div className="ps-feature"><Check /> Bundled offline AI model</div>
              <div className="ps-feature"><Check /> One step per request</div>
              <div className="ps-feature"><Check /> Core modeling &amp; query tools</div>
              <div className="ps-feature"><Check /> Per-project memory</div>
            </div>
            <div className="ps-button">
              <Button variant="ghost" size="large" as={Link} to="/download" style={{width: '100%'}}>Download Free</Button>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="ps-card popular">
            <div className="ps-popular-badge">Most Popular</div>
            <h3 className="ps-tier">Pro</h3>
            <p className="ps-desc">For professionals automating real project documentation.</p>
            <div className="ps-price-block">
              <span className="ps-price">$29</span><span className="ps-period">/mo</span>
            </div>
            <p className="revin-billing-note">or $249/year — save $99 (28% off)</p>
            <div className="ps-features">
              <div className="ps-feature"><Check /> Everything in Free</div>
              <div className="ps-feature"><Check /> Autonomous multi-step tasks</div>
              <div className="ps-feature"><Check /> All 100+ automation tools</div>
              <div className="ps-feature"><Check /> RebarX integration</div>
              <div className="ps-feature"><Check /> Priority support</div>
            </div>
            <div className="ps-button">
              <Button variant="primary" size="large" {...buyProps(REVIN_CHECKOUT_URL)} style={{width: '100%'}}>Get Pro</Button>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="ps-card">
            <h3 className="ps-tier">Enterprise</h3>
            <p className="ps-desc">For firms with air-gapped, NDA, or government requirements.</p>
            <div className="ps-price-block">
              <span className="ps-price">Custom</span>
            </div>
            <div className="ps-features">
              <div className="ps-feature"><Check /> Floating / volume licenses</div>
              <div className="ps-feature"><Check /> Fully offline / on-prem deployment</div>
              <div className="ps-feature"><Check /> Custom tools &amp; firm QC rules</div>
              <div className="ps-feature"><Check /> Dedicated support</div>
            </div>
            <div className="ps-button">
              <Button variant="ghost" size="large" as={Link} to="/company/contact" style={{width: '100%'}}>Contact Sales</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RevinPricing;
