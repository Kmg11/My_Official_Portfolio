import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const ProjectContext = createContext();

export function ProjectProvider({ children, value }) {
  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object.isRequired,
};

export const useProject = () => {
  const context = useContext(ProjectContext);

  if (context === undefined) throw new Error('useProject must be used within a ProjectProvider');

  return context;
};
