import PropTypes from 'prop-types';
import { IMAGES } from '../../../constants';
import { Components } from '../../../Style';
import { CreateImage } from '../../CreateImage/CreateImage';
import * as Style from './Image.style';

const ImageVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

export function Image({ data, isPending }) {
  return isPending ? (
    <Style.ImageContainer>
      <Components.SkeletonLoadingBox />
    </Style.ImageContainer>
  ) : (
    data && (
      <Style.ImageContainer variants={ImageVariants}>
        <CreateImage src={`${IMAGES.GLOBAL}/personal-image`} alt={data.name} />
      </Style.ImageContainer>
    )
  );
}

Image.propTypes = {
  data: PropTypes.object,
  isPending: PropTypes.bool.isRequired,
};
