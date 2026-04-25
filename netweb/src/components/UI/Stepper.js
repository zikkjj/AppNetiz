import React from 'react';

const Stepper = ({ currentStep, totalSteps }) => {
  return (
    <div className="stepper-container">
      <p className="stepper-text">Etapa <strong>{currentStep}</strong> de {totalSteps}</p>
      <div className="stepper-bar-bg">
        <div 
          className="stepper-bar-fill" 
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
export default Stepper;
