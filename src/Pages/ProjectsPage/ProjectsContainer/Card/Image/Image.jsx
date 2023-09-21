import PropTypes from 'prop-types';
import { IMAGES } from '../../../../../constants';
import { CreateImage } from '../../../../../Components/CreateImage/CreateImage';
import * as Style from './Image.style';
import { useInfo } from '../InfoContext';

export function Image({ imageNumber }) {
  const { title, images } = useInfo();

  return (
    <Style.ImageContainer>
      <CreateImage src={`${IMAGES.PROJECTS}/${images.folder_name}/${imageNumber}`} alt={title} />
    </Style.ImageContainer>
  );
}

Image.propTypes = {
  imageNumber: PropTypes.number.isRequired,
};
