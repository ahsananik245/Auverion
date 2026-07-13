import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/company/about" className="footer-link">About</Link></li>
              <li><Link to="/company/mission" className="footer-link">Mission</Link></li>
              <li><Link to="/company/team" className="footer-link">Team</Link></li>
              <li><Link to="/company/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/company/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links">
              <li><Link to="/products/rebarx" className="footer-link">RebarX</Link></li>
              <li><span className="footer-link disabled">Future Products (Coming Soon)</span></li>
              <li><span className="footer-link disabled">Product Roadmap (Coming Soon)</span></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/documentation" className="footer-link">Documentation</Link></li>
              <li><span className="footer-link disabled">Tutorials (Coming Soon)</span></li>
              <li><span className="footer-link disabled">Blog (Coming Soon)</span></li>
              <li><Link to="/download" className="footer-link">Download</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><span className="footer-link disabled">Knowledge Base (Coming Soon)</span></li>
              <li><span className="footer-link disabled">Ticket (Coming Soon)</span></li>
              <li><span className="footer-link disabled">Community (Coming Soon)</span></li>
              <li><span className="footer-link disabled">Status (Coming Soon)</span></li>
              <li><span className="footer-link disabled">Contact Support (Coming Soon)</span></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/company/legal" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/company/legal" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/company/legal" className="footer-link">Cookie Policy</Link></li>
              <li><Link to="/company/accessibility" className="footer-link">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <img src="/logo.png" alt="Auverion" style={{ height: '24px', marginRight: '8px' }} />
            <span>&copy; {new Date().getFullYear()} Auverion. All rights reserved.</span>
            <span>Version 1.0.0</span>
          </div>
          
          <div className="footer-bottom-right">
            <div className="language-selector">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              English (US)
            </div>
            <div className="footer-socials">
              <a href="https://linkedin.com/company/auverion" className="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://x.com/auverion" className="social-icon" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
