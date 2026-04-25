import React from 'react';

const MapPlaceholder = ({ hasCoverage }) => (
  <div className={`map-placeholder ${hasCoverage ? 'coverage-yes' : 'coverage-no'}`}>
    {hasCoverage ? (
      <div className="map-simulate-yes">
        <div className="map-sonar-ring"></div>
        <p className="map-overlay-text">Cobertura confirmada para a sua vizinhança!</p>
      </div>
    ) : (
      <div className="map-simulate-no">
        <p className="map-overlay-text">Ops, área fora de abrangência atual.</p>
      </div>
    )}
  </div>
);
export default MapPlaceholder;
