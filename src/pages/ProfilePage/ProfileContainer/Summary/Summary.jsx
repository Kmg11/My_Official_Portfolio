import PropTypes from 'prop-types';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../../../../components';
import * as Style from './Summary.style';

export function Summary({ response }) {
  const { data, isPending } = response;

  return (
    <Style.Summary>
      <Box
        title="frontend web developer"
        icon={faInfo}
        isPending={isPending}
        data={data}
        section="summary"
      />
    </Style.Summary>
  );
}

Summary.propTypes = {
  response: PropTypes.object.isRequired,
};
