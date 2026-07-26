import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import './RevinHero.css';

const RevinHero = () => {
  return (
    <section className="revin-hero">
      <div className="container">
        <div className="revin-hero-badge">OFFLINE AI · REVIT PLUGIN</div>
        <h1 className="revin-hero-title">Revin</h1>
        <p className="revin-hero-tagline">
          An expert AI assistant that lives inside Revit and runs fully offline.
          Describe what you want in plain language — Revin models it, documents it,
          and automates the busywork, with your data never leaving your machine.
        </p>
        <div className="revin-hero-actions">
          <Button variant="primary" size="large" as={Link} to="/download">Get Revin</Button>
          <Button variant="ghost" size="large" as="a" href="#revin-pricing">See Pricing</Button>
        </div>
      </div>
    </section>
  );
};

export default RevinHero;
