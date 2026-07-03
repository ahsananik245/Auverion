import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="ts-quote-mark">"</div>
        <p className="ts-quote">
          RebarX completely fundamentally changed how we handle structural detailing. We reduced our reinforcement modeling time by over 60% while simultaneously eliminating human translation errors between our analysis models and final Revit sheets.
        </p>
        <div className="ts-author">Sarah Jenkins, P.E.</div>
        <div className="ts-role">Director of Structural Engineering, Global Infrastructure Group</div>
      </div>
    </section>
  );
};

export default Testimonial;
