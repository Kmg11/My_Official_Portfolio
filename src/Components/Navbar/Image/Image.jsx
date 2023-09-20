import { Link } from 'react-router-dom';
import { Images, Routes } from '../../../Constants';
import { CreateImage } from '../../CreateImage/CreateImage';
import * as Style from './Image.style';

const imageVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export function Image() {
  return (
    <Style.ImageContainer variants={imageVariants}>
      <Link to={Routes.PROFILE}>
        <CreateImage src={`${Images.GLOBAL}/personal-image`} alt="Kirolos Mahfouz" />
      </Link>
    </Style.ImageContainer>
  );
}
