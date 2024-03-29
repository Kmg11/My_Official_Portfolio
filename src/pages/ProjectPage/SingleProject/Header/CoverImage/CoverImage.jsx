import { IMAGES } from '../../../../../constants';
import { CreateImage } from '../../../../../components';
import * as Style from './CoverImage.style';
import { useProject } from '../../ProjectContext';

const imageVariants = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: {
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

export function CoverImage() {
  const { project } = useProject();

  return (
    <Style.CoverImage variants={imageVariants}>
      {project && (
        <CreateImage
          src={`${IMAGES.PROJECTS}/${project.images.folder_name}/1`}
          alt={`${project.title} Cover Image`}
        />
      )}
    </Style.CoverImage>
  );
}
