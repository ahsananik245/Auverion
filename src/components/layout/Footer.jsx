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
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Mission</a></li>
              <li><a href="#" className="footer-link">Team</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">RebarX</a></li>
              <li><a href="#" className="footer-link">Future Products</a></li>
              <li><a href="#" className="footer-link">Product Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Documentation</a></li>
              <li><a href="#" className="footer-link">Tutorials</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Knowledge Base</a></li>
              <li><a href="#" className="footer-link">Ticket</a></li>
              <li><a href="#" className="footer-link">Community</a></li>
              <li><a href="#" className="footer-link">Status</a></li>
              <li><a href="#" className="footer-link">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="/company/legal" className="footer-link">Privacy Policy</a></li>
              <li><a href="/company/legal" className="footer-link">Terms of Service</a></li>
              <li><a href="/company/legal" className="footer-link">Cookie Policy</a></li>
              <li><Link to="/company/accessibility" className="footer-link">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
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
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
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
