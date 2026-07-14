import React from 'react';
import Button from '../ui/Button';
import './IntegrationHighlight.css';

const IntegrationHighlight = () => {
  return (
    <section className="integration-highlight">
      <div className="container">
        <div className="ih-content">
          
          <div className="ih-left">
            <div className="ih-badge">REVIT PLUGIN</div>
            <h2 className="ih-title">Runs natively <br/> inside Revit.</h2>
            <p className="ih-desc">
              RebarX is a native Revit plugin — not a standalone app. It lives inside Revit and reads your ETABS analysis data directly, automating reinforcement detailing without ever leaving your BIM environment. One click inside Revit, fully detailed structural model.
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
                <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#93C5FD', marginTop: '8px' }}>Revit Plugin</span>
              </div>

              <div className="ih-connector">
                <div className="ih-connector-pulse"></div>
              </div>

              <div className="ih-logo-box" style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', border: '1px solid #26364F' }}>
                Revit
                <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#9ca3af', marginTop: '8px' }}>BIM Output</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IntegrationHighlight;
