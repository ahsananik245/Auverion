import React from 'react';
import Button from '../ui/Button';
import './DownloadHelp.css';

const DownloadHelp = () => {
  return (
    <section className="download-help">
      <div className="container">
        <h2 className="dh-help-title">Need Installation Help?</h2>
        <div className="dh-help-actions">
          <Button variant="primary" size="large">Installation Guide</Button>
          <Button variant="secondary" size="large">Documentation</Button>
          <Button variant="secondary" size="large">Contact Support</Button>
          <Button variant="secondary" size="large">Community</Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadHelp;
