import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist." 
      />
      <div className="not-found-container" style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px'
      }}>
        <h1 style={{ fontSize: '72px', color: 'var(--accent-blue)', marginBottom: '24px' }}>404</h1>
        <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '32px', lineHeight: '1.6' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button variant="primary" as={Link} to="/">Return Home</Button>
          <Button variant="outline" as={Link} to="/documentation">Search Documentation</Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
