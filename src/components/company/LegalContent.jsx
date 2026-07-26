import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
// Canonical documents live in /legal (also used for the installer and Autodesk submission).
import eula from '../../../legal/EULA.md?raw';
import privacy from '../../../legal/PRIVACY-POLICY.md?raw';
import terms from '../../../legal/TERMS-OF-SERVICE.md?raw';
import refund from '../../../legal/REFUND-POLICY.md?raw';
import './LegalContent.css';

const DOCS = [
  { id: 'terms', label: 'Terms of Service', body: terms },
  { id: 'privacy', label: 'Privacy Policy', body: privacy },
  { id: 'eula', label: 'EULA', body: eula },
  { id: 'refund', label: 'Refund Policy', body: refund },
];

const LegalContent = () => {
  const [activeTab, setActiveTab] = useState('terms');
  const active = DOCS.find((d) => d.id === activeTab) || DOCS[0];

  return (
    <div className="legal-content container anim-fade-in">
      <div className="legal-tabs">
        {DOCS.map((d) => (
          <button
            key={d.id}
            className={`legal-tab ${activeTab === d.id ? 'active' : ''}`}
            onClick={() => setActiveTab(d.id)}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="legal-document anim-slide-up" key={activeTab}>
        <ReactMarkdown>{active.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default LegalContent;
