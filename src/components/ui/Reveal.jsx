import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Reveal.css';

const Reveal = ({ children, staggerIndex = 0, className = '' }) => {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.1 });
  
  // Cap stagger index at 11 (max 12 elements per spec)
  const safeIndex = Math.min(staggerIndex, 11);
  const animationDelay = `${safeIndex * 80}ms`;

  return (
    <div 
      ref={ref} 
      className={`reveal-wrapper ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={{ animationDelay }}
    >
      {children}
    </div>
  );
};

export default Reveal;
