import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
// Reuse the RebarX integration-highlight styling so Revin matches the site system.
import '../rebarx/IntegrationHighlight.css';

const RevinIntegration = () => {
  return (
    <section className="integration-highlight">
      <div className="container">
        <div className="ih-content">

          <div className="ih-left">
            <div className="ih-badge">100% OFFLINE</div>
            <h2 className="ih-title">Your model never <br/> leaves your machine.</h2>
            <p className="ih-desc">
              Revin bundles its own fine-tuned AI model and runs it locally — no cloud,
              no API key required, no project data sent anywhere. Perfect for NDA work,
              government projects, and air-gapped offices. Type what you need in plain
              English and Revin builds, documents, and edits your BIM directly inside Revit.
            </p>
            <Button variant="ghost" as={Link} to="/documentation">View Documentation</Button>
          </div>

          <div className="ih-right">
            <div className="ih-visual">
              <div className="ih-logo-box etabs">
                You
                <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#9ca3af', marginTop: '8px' }}>Plain-language request</span>
              </div>

              <div className="ih-connector">
                <div className="ih-connector-pulse"></div>
              </div>

              <div className="ih-logo-box rebarx">
                Revin
                <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#93C5FD', marginTop: '8px' }}>Local AI · Revit Plugin</span>
              </div>

              <div className="ih-connector">
                <div className="ih-connector-pulse"></div>
              </div>

              <div className="ih-logo-box" style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', border: '1px solid #26364F' }}>
                Revit
                <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#9ca3af', marginTop: '8px' }}>Modeled &amp; documented</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RevinIntegration;
