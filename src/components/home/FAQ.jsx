import React, { useState } from 'react';
import Button from '../ui/Button';
import './FAQ.css';

const faqs = [
  {
    q: 'How does RebarX work?',
    a: 'RebarX extracts internal forces directly from your structural analysis model (like ETABS), processes them through our proprietary automation engine, and automatically generates detailed 3D reinforcement models and 2D documentation.'
  },
  {
    q: 'Which ETABS versions are supported?',
    a: 'We support all major versions of ETABS from v18 through the latest release. The integration works natively via our ETABS plugin or EXR export format.'
  },
  {
    q: 'Which Revit versions are supported?',
    a: 'RebarX connects seamlessly with Autodesk Revit 2021 through 2025 for final BIM coordination and detailing.'
  },
  {
    q: 'What type of License do you offer?',
    a: 'We offer Professional, Enterprise, and Academic licenses on an annual subscription basis. Network licensing is available for Enterprise teams.'
  },
  {
    q: 'Does it work Offline?',
    a: 'Yes, RebarX operates entirely as a native Revit plugin. While internet is required for initial activation and occasional updates, day-to-day engineering workflows function completely offline within Revit.'
  },
  {
    q: 'How are Updates handled?',
    a: 'Updates are delivered seamlessly through the application. Professional and Enterprise users receive priority access to new feature releases.'
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
          <h2 className="cta-title">Ready to Automate<br />Your Reinforcement Workflow?</h2>
          <div className="cta-buttons">
            <Button variant="primary" size="large">Download</Button>
            <Button variant="ghost" size="large">Documentation</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
