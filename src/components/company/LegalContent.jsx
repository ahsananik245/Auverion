import React, { useState } from 'react';
import './LegalContent.css';

const LegalContent = () => {
  const [activeTab, setActiveTab] = useState('tos');

  return (
    <div className="legal-content container anim-fade-in">
      <div className="legal-tabs">
        <button 
          className={`legal-tab ${activeTab === 'tos' ? 'active' : ''}`}
          onClick={() => setActiveTab('tos')}
        >
          Terms of Service
        </button>
        <button 
          className={`legal-tab ${activeTab === 'privacy' ? 'active' : ''}`}
          onClick={() => setActiveTab('privacy')}
        >
          Privacy Policy
        </button>
      </div>

      <div className="legal-document anim-slide-up" key={activeTab}>
        {activeTab === 'tos' ? (
          <>
            <h2>Terms of Service</h2>
            <p>Last updated: July 4, 2026</p>
            <h3>1. Agreement to Terms</h3>
            <p>By accessing or using Auverion's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
            <h3>2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Auverion's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            <h3>3. Disclaimer</h3>
            <p>The materials on Auverion's website are provided on an 'as is' basis. Auverion makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </>
        ) : (
          <>
            <h2>Privacy Policy</h2>
            <p>Last updated: July 4, 2026</p>
            <h3>1. Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.</p>
            <h3>2. How We Use Your Information</h3>
            <p>We may use the information we collect about you to provide, maintain, and improve our services, including, for example, to facilitate payments, send receipts, provide products and services you request, develop new features, provide customer support to Users, and send product updates.</p>
            <h3>3. Sharing of Information</h3>
            <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: with third party service providers; in response to a request for information by a competent authority if we believe disclosure is in accordance with, or is otherwise required by, any applicable law, regulation, or legal process.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LegalContent;
