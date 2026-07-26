import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './FAQ.css';

const faqs = [
  {
    q: 'What is the Auverion suite?',
    a: 'A set of automation tools that live inside Autodesk Revit. Revin is an offline AI assistant that models and documents projects from plain-language requests; RebarX automates structural reinforcement detailing from ETABS analysis.'
  },
  {
    q: 'Does Revin need internet or an API key?',
    a: 'No. Revin ships with its own fine-tuned AI model that runs locally on your machine, so it works completely offline with no API key. You can optionally connect a cloud model with your own key, but the offline model is the default.'
  },
  {
    q: 'Is my project data sent anywhere?',
    a: 'No. With the bundled offline model, nothing about your model or conversation leaves your computer — which makes Revin suitable for NDA, government, and air-gapped work where cloud AI is not allowed.'
  },
  {
    q: 'Which Revit versions are supported?',
    a: 'The tools install into Autodesk Revit 2022 through 2026 on Windows 10/11 (64-bit). The installer auto-detects your installed versions, including custom install folders.'
  },
  {
    q: 'What licensing do you offer?',
    a: 'Revin has a free tier plus Pro ($29/mo or $249/yr), a limited Founder lifetime plan, and custom Enterprise licensing. RebarX is licensed separately. Everything activates and then runs offline.'
  },
  {
    q: 'How are updates handled?',
    a: 'The add-in checks for new releases and shows an in-app notice when one is available. Small code updates never require re-downloading the bundled AI model.'
  }
];

const FAQ = ({ faqsData }) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const displayFaqs = faqsData || faqs;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2 className="faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-container">
            {displayFaqs.map((faq, index) => (
              <div 
                className={`faq-item ${openIndex === index ? 'open' : ''}`} 
                key={index}
              >
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="faq-answer">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Automate<br />Your BIM Workflow?</h2>
          <div className="cta-buttons">
            <Button as={Link} to="/download" variant="primary" size="large">Download</Button>
            <Button as={Link} to="/documentation" variant="ghost" size="large">Documentation</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
