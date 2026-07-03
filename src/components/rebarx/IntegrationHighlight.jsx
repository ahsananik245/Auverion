import React from 'react';
import Button from '../ui/Button';
import './IntegrationHighlight.css';

const IntegrationHighlight = () => {
  return (
    <section className="integration-highlight">
      <div className="container">
        <div className="ih-content">
          
          <div className="ih-left">
            <div className="ih-badge">NATIVE INTEGRATION</div>
            <h2 className="ih-title">Built specifically <br/> for ETABS.</h2>
            <p className="ih-desc">
              We didn't build a generic plugin. RebarX was engineered from the ground up to read native CSI ETABS analysis data perfectly. By utilizing the exact internal forces, load combinations, and shell stresses from your ETABS model, RebarX guarantees that the reinforcement it generates satisfies the precise mathematical requirements of your structural analysis.
            </p>
            <Button variant="ghost">View Integration Docs</Button>
          </div>
          
          <div className="ih-right">
            <div className="ih-visual">
              <div className="ih-logo-box etabs">
                ETABS
                <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#9ca3af', marginTop: '8px' }}>Analysis Model</span>
              </div>
              
              <div className="ih-connector">
                <div className="ih-connector-pulse"></div>
              </div>
              
              <div className="ih-logo-box rebarx">
                RebarX
                <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#9ca3af', marginTop: '8px' }}>3D Detailing</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IntegrationHighlight;
