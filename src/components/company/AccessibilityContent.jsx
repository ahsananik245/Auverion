import React from 'react';
import './AccessibilityContent.css';

const AccessibilityContent = () => {
  return (
    <div className="accessibility-content container">
      <div className="accessibility-header anim-fade-in">
        <h2>Accessibility Statement</h2>
        <p className="text-secondary">Auverion is committed to digital inclusion.</p>
      </div>

      <div className="accessibility-body anim-slide-up">
        <h3>Our Commitment</h3>
        <p>At Auverion, we believe that the web should be accessible to everyone, regardless of ability. We are actively working to increase the accessibility and usability of our website and applications, and in doing so adhere to many of the available standards and guidelines.</p>
        
        <h3>Standards & Compliance</h3>
        <p>Our goal is to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as published by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C). These guidelines explain how to make web content more accessible for people with disabilities, and user-friendly for everyone.</p>

        <h3>Ongoing Efforts</h3>
        <p>Accessibility is an ongoing journey. We regularly test our site using assistive technologies like screen readers and magnifiers, and we train our developers and designers on accessibility best practices. We are continually seeking solutions that will bring all areas of the site up to the same level of overall web accessibility.</p>

        <div className="accessibility-contact">
          <h4 style={{ marginBottom: '16px' }}>Feedback & Support</h4>
          <p style={{ fontSize: 'var(--text-body)', marginBottom: '16px' }}>If you experience any difficulty in accessing any part of this website, please feel free to contact us. We will work with you to provide the information, item, or transaction you seek through an alternate communication method.</p>
          <a href="mailto:accessibility@auverion.com">accessibility@auverion.com</a>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityContent;
