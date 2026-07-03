import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'normal', 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`auverion-btn ${variant} ${size === 'large' ? 'large' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
