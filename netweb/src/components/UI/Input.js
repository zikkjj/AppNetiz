import React from 'react';

const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className={`input-group ${className}`}>
      {label && <label className="input-label" htmlFor={props.id || props.name}>{label}</label>}
      <input 
        className={`input-field ${error ? 'input-error' : ''}`}
        {...props}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};
export default Input;
