import PropTypes from 'prop-types';
import * as Style from './CategoriesButtons.style';

const categoriesVariants = {
  hidden: { opacity: 0, y: '-300%', transition: { duration: 0.5 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function CategoriesButtons({
  currentProjectsTab,
  PAGES,
  setTopPage,
  setTemplatesPage,
  setAppsPage,
}) {
  return (
    <Style.Categories
      variants={categoriesVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Style.Button onClick={setTopPage} active={currentProjectsTab === PAGES.TOP}>
        Top
      </Style.Button>

      <Style.Button onClick={setTemplatesPage} active={currentProjectsTab === PAGES.TEMPLATES}>
        Templates
      </Style.Button>

      <Style.Button onClick={setAppsPage} active={currentProjectsTab === PAGES.APPS}>
        Apps
      </Style.Button>
    </Style.Categories>
  );
}

CategoriesButtons.propTypes = {
  setTopPage: PropTypes.func.isRequired,
  setTemplatesPage: PropTypes.func.isRequired,
  setAppsPage: PropTypes.func.isRequired,
  PAGES: PropTypes.object.isRequired,
  currentProjectsTab: PropTypes.string.isRequired,
};
