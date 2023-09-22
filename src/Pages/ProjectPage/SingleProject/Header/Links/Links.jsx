import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { CircleButtonSkeleton, CircleButton } from '../../../../../components';
import { useProject } from '../../ProjectContext';
import * as Style from './Links.style';

const buttonVariants = {
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
    transition: { duration: 0.5, delay: 0.9 },
  },
};

export function Links() {
  const { project, isPending } = useProject();

  return (
    <Style.Links key={project} variants={isPending ? null : project && buttonVariants}>
      {project && (
        <>
          <CircleButton to={project.links.github} icon={faGithub}>
            github
          </CircleButton>
          <CircleButton to={project.links.live} icon={faWifi}>
            live
          </CircleButton>
        </>
      )}

      {isPending && (
        <>
          <CircleButtonSkeleton />
          <CircleButtonSkeleton />
        </>
      )}
    </Style.Links>
  );
}
