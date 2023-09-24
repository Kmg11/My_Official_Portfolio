import PropTypes from 'prop-types';
import { Header } from './Header/Header';
import { Info } from './Info/Info';
import { ProjectProvider } from './ProjectContext';
import * as Style from './SingleProject.style';

const containerVariants = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

export function SingleProject({ data }) {
  return (
    <ProjectProvider value={data}>
      <Style.ProjectContext
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Header />
        <Info />
      </Style.ProjectContext>
    </ProjectProvider>
  );
}

SingleProject.propTypes = {
  data: PropTypes.object.isRequired,
};
