import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist." 
      />
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
        </p>
        <div className="not-found-actions">
          <Button variant="primary" as={Link} to="/">Return Home</Button>
          <Button variant="outline" as={Link} to="/documentation">Search Documentation</Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
