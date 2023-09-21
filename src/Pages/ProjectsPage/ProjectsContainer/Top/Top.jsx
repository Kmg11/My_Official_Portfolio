import PropTypes from 'prop-types';
import { Slider } from './Slider/Slider';

export function Top({ page, data }) {
  const { templates, apps } = data;

  return (
    <>
      <Slider response={templates} page={page} />
      <Slider response={apps} page={page} />
    </>
  );
}

Top.propTypes = {
  page: PropTypes.shape({
    setProjectsPage: PropTypes.func.isRequired,
    pageType: PropTypes.object.isRequired,
  }).isRequired,

  data: PropTypes.shape({
    templates: PropTypes.object.isRequired,
    apps: PropTypes.object.isRequired,
  }).isRequired,
};
