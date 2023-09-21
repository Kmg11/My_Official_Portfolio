import PropTypes from 'prop-types';
import { SkeletonText } from '../../../ui';
import * as Style from './Description.style';

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
    transition: { duration: 0.5, delay: 0.6 },
  },
};

export function Description({ data, isPending }) {
  return isPending ? (
    <Style.Description>
      <SkeletonText />
      <SkeletonText />
    </Style.Description>
  ) : (
    data && <Style.Description variants={nameVariants}>{data.description}</Style.Description>
  );
}

Description.propTypes = {
  data: PropTypes.object,
  isPending: PropTypes.bool.isRequired,
};
