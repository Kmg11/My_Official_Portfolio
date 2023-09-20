import PropTypes from 'prop-types';
import { Components } from '../../../Style';
import * as Style from './Name.style';

const nameVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    originX: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

export function Name({ data, isPending }) {
  return isPending ? (
    <Style.Name>
      <Components.SkeletonLoadingText head />
    </Style.Name>
  ) : (
    data && <Style.Name variants={nameVariants}>{data.name}</Style.Name>
  );
}

Name.propTypes = {
  data: PropTypes.object,
  isPending: PropTypes.bool.isRequired,
};
