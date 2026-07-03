import React from 'react';
import Button from '../ui/Button';
import './UpdateChannels.css';

const UpdateChannels = () => {
  return (
    <section className="update-channels">
      <div className="container">
        
        <h3 className="uc-section-title">Update Channels</h3>
        
        <div className="uc-grid">
          
          <div className="uc-card">
            <div className="uc-header">
              <div className="uc-badge stable">Stable</div>
              <h4 className="uc-title">Production Release</h4>
            </div>
            <div className="uc-content">
              <p className="uc-desc">Fully tested and certified for production use. Recommended for all users and organizational deployments.</p>
              <div className="uc-details">
                <div className="uc-detail">
                  <span className="uc-detail-label">Audience</span>
                  <span className="uc-detail-value">All Users</span>
                </div>
                <div className="uc-detail">
                  <span className="uc-detail-label">Frequency</span>
                  <span className="uc-detail-value">Quarterly</span>
                </div>
                <div className="uc-detail">
                  <span className="uc-detail-label">Support</span>
                  <span className="uc-detail-value">Full SLA</span>
                </div>
              </div>
            </div>
            <div className="uc-action">
              <Button variant="secondary">View Releases</Button>
            </div>
          </div>
          
          <div className="uc-card">
            <div className="uc-header">
              <div className="uc-badge preview">Preview</div>
              <h4 className="uc-title">Early Access</h4>
            </div>
            <div className="uc-content">
              <p className="uc-desc">Get early access to upcoming features. Reasonably stable, but may contain minor bugs. Not for critical projects.</p>
              <div className="uc-details">
                <div className="uc-detail">
                  <span className="uc-detail-label">Audience</span>
                  <span className="uc-detail-value">Power Users</span>
                </div>
                <div className="uc-detail">
                  <span className="uc-detail-label">Frequency</span>
                  <span className="uc-detail-value">Monthly</span>
                </div>
                <div className="uc-detail">
                  <span className="uc-detail-label">Support</span>
                  <span className="uc-detail-value">Community</span>
                </div>
              </div>
            </div>
            <div className="uc-action">
              <Button variant="secondary">Join Preview</Button>
            </div>
          </div>
          
          <div className="uc-card">
            <div className="uc-header">
              <div className="uc-badge beta">Beta</div>
              <h4 className="uc-title">Nightly Builds</h4>
            </div>
            <div className="uc-content">
              <p className="uc-desc">Bleeding edge builds containing the latest code commits. High risk of instability and data corruption. Testing only.</p>
              <div className="uc-details">
                <div className="uc-detail">
                  <span className="uc-detail-label">Audience</span>
                  <span className="uc-detail-value">Developers</span>
                </div>
                <div className="uc-detail">
                  <span className="uc-detail-label">Frequency</span>
                  <span className="uc-detail-value">Daily</span>
                </div>
                <div className="uc-detail">
                  <span className="uc-detail-label">Support</span>
                  <span className="uc-detail-value">None</span>
                </div>
              </div>
            </div>
            <div className="uc-action">
              <Button variant="secondary">Download Beta</Button>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default UpdateChannels;
