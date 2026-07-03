import React, { useState } from 'react';
import Button from '../ui/Button';
import './SoftwarePreview.css';

const SoftwarePreview = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const tabs = ['Dashboard', 'Projects', 'Viewport', 'Reports', 'Settings'];

  return (
    <section className="preview-section">
      <div className="preview-bg"></div>
      
      <div className="container preview-content">
        <div className="preview-left">
          <h2 className="preview-title">
            Interactive Software Preview
          </h2>
          <p className="preview-desc">
            Explore the RebarX interface. Designed for professional structural teams, our platform offers a seamless experience from project dashboard to 3D reinforcement viewport.
          </p>
          <Button variant="primary">Start Free Trial</Button>
        </div>
        
        <div className="preview-right">
          <div className="browser-mockup">
            <div className="browser-header">
              <div className="browser-dots">
                <div className="browser-dot"></div>
                <div className="browser-dot"></div>
                <div className="browser-dot"></div>
              </div>
              <div className="browser-tabs">
                {tabs.map(tab => (
                  <div 
                    key={tab} 
                    className={`browser-tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="browser-body">
              <div className="browser-content-area">
                Simulated {activeTab} View
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwarePreview;
