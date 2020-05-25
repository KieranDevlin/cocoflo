import React from 'react';
import './styles.scss';
const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
