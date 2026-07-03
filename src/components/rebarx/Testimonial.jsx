import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Join the Private Beta</h2>
        <p className="ts-quote" style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto 32px', fontStyle: 'normal' }}>
          RebarX is currently in active development. We are working closely with early access partners to refine our AI detailing engine.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Button variant="primary" size="large" as={Link} to="/download">Join the Waitlist</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
