import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'normal', 
  className = '', 
  as: Component = 'button',
  ...props 
}) => {
  return (
    <Component 
      className={`auverion-btn ${variant} ${size === 'large' ? 'large' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
