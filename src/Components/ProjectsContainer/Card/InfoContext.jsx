import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const InfoContext = createContext();

export function InfoProvider({ children, value }) {
  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
}

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object.isRequired,
};

export function useInfo() {
  const context = React.useContext(InfoContext);

  if (context === undefined) throw new Error('useInfo must be used within a InfoProvider');

  return context;
}
