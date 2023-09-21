import PropTypes from 'prop-types';
import { Slider } from './Slider/Slider';

export function Top({ setCurrentProjectsTab, PAGES, data }) {
  const { templates, apps } = data;

  return (
    <>
      <Slider response={templates} PAGES={PAGES} setCurrentProjectsTab={setCurrentProjectsTab} />
      <Slider response={apps} PAGES={PAGES} setCurrentProjectsTab={setCurrentProjectsTab} />
    </>
  );
}

Top.propTypes = {
  setCurrentProjectsTab: PropTypes.func.isRequired,
  PAGES: PropTypes.object.isRequired,

  data: PropTypes.shape({
    templates: PropTypes.object.isRequired,
    apps: PropTypes.object.isRequired,
  }).isRequired,
};
