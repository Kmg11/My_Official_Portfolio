import PropTypes from 'prop-types';
import { Images } from '../../../../Constants';
import { CreateImage } from '../../../CreateImage/CreateImage';
import * as Style from './Image.style';
import { useInfo } from '../InfoContext';

export function Image({ imageNumber }) {
  const { title, images } = useInfo();

  return (
    <Style.ImageContainer>
      <CreateImage src={`${Images.PROJECTS}/${images.folder_name}/${imageNumber}`} alt={title} />
    </Style.ImageContainer>
  );
}

Image.propTypes = {
  imageNumber: PropTypes.number.isRequired,
};
