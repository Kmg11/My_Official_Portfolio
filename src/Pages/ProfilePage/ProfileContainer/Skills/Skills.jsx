import PropTypes from 'prop-types';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../../../../components';
import * as Style from './Skills.style';

export function Skills({ response }) {
  const { data, isPending } = response;

  return (
    <Style.Skills>
      <Box title="skills" icon={faTools} isPending={isPending} data={data} section="skills" />
    </Style.Skills>
  );
}

Skills.propTypes = {
  response: PropTypes.object.isRequired,
};
