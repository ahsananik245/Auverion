import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
              AUVERION
            </Link>
            
            <div className="nav-links hide-mobile hide-tablet">
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/solutions" className="nav-link">Solutions</Link>
              <Link to="/enterprise" className="nav-link">Enterprise</Link>
              <Link to="/documentation" className="nav-link">Documentation</Link>
              <Link to="/pricing" className="nav-link">Pricing</Link>
              <Link to="/download" className="nav-link">Download</Link>
              <Link to="/company" className="nav-link">Company</Link>
              <Link to="/support" className="nav-link">Support</Link>
            </div>

            <div className="nav-actions hide-mobile hide-tablet">
              <button className="nav-search" aria-label="Search">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <Button variant="ghost">Login</Button>
              <Button variant="primary">Download</Button>
            </div>

            <button 
              className="mobile-menu-toggle hide-desktop" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-search-bar">
            <input type="text" placeholder="Search Auverion..." />
          </div>
          <div className="mobile-nav-links">
            <Link to="/products" onClick={closeMobileMenu}>Products</Link>
            <Link to="/solutions" onClick={closeMobileMenu}>Solutions</Link>
            <Link to="/enterprise" onClick={closeMobileMenu}>Enterprise</Link>
            <Link to="/documentation" onClick={closeMobileMenu}>Documentation</Link>
            <Link to="/pricing" onClick={closeMobileMenu}>Pricing</Link>
            <Link to="/download" onClick={closeMobileMenu}>Download</Link>
            <Link to="/company" onClick={closeMobileMenu}>Company</Link>
            <Link to="/support" onClick={closeMobileMenu}>Support</Link>
          </div>
          <div className="mobile-nav-actions">
            <Button variant="ghost" onClick={closeMobileMenu} style={{width: '100%', marginBottom: '16px'}}>Login</Button>
            <Button variant="primary" onClick={closeMobileMenu} style={{width: '100%'}}>Download Now</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
