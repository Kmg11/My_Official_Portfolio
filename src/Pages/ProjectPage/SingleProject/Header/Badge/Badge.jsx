import { Components } from '../../../../../styles';
import * as Style from './Badge.style';
import { useProject } from '../../ProjectContext';

const badgeVariants = {
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
    transition: { duration: 0.5 },
  },
};

export function Badge() {
  const { project, isPending } = useProject();

  return isPending ? (
    <Components.SkeletonLoadingBox width="120px" height="20px" />
  ) : (
    project && <Style.Badge variants={badgeVariants}>{project.type}</Style.Badge>
  );
}
