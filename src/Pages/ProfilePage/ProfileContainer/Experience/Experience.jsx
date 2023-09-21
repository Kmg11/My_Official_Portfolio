import PropTypes from 'prop-types';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../../../../components';

export function Experience({ response }) {
  const { data, isPending } = response;

  return (
    <section>
      <Box
        title="Experience"
        icon={faInfo}
        isPending={isPending}
        data={data}
        section="experience"
      />
    </section>
  );
}

Experience.propTypes = {
  response: PropTypes.object.isRequired,
};
