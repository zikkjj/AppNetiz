import React from 'react';

const Button = ({ variant = 'primary', className = '', isLoading, children, ...props }) => {
  const baseClasses = "btn-base";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    warning: "btn-warning"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`} 
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <span className="btn-spinner"></span> : children}
    </button>
  );
};
export default Button;
