import { Components } from '../../../../../styles';
import * as Style from './Description.style';
import { useProject } from '../../ProjectContext';

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 1.1,
    originX: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.6 },
  },
};

export function Description() {
  const { project, isPending } = useProject();

  return isPending ? (
    <Style.Description>
      <Components.SkeletonLoadingText />
      <Components.SkeletonLoadingText />
      <Components.SkeletonLoadingText />
    </Style.Description>
  ) : (
    project && (
      <Style.Description variants={descriptionVariants}>{project.description}</Style.Description>
    )
  );
}
