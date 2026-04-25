import React from 'react';

const CoverageModal = ({
  showCoverageModal,
  isCheckingCoverage,
  coverageInput,
  setCoverageInput,
  handleVerifyCoverage,
  setShowCoverageModal
}) => {
  if (!showCoverageModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Verificar Cobertura</h3>
        {isCheckingCoverage ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Nossa IA está verificando sua região...</p>
          </div>
        ) : (
          <form onSubmit={handleVerifyCoverage}>
            <input 
              type="text" 
              value={coverageInput}
              onChange={(e) => setCoverageInput(e.target.value)}
              placeholder="Digite seu CEP ou Endereço..." 
              className="modal-input"
              disabled={isCheckingCoverage}
            />
            <button type="submit" className="plan-cta modal-submit" disabled={isCheckingCoverage || !coverageInput.trim()}>Verificar</button>
            <button type="button" className="modal-close" onClick={() => setShowCoverageModal(false)}>Cancelar</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CoverageModal;
