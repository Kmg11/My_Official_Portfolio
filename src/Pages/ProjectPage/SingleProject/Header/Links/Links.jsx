import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { CircleButtons, CircleButton } from '../../../../../components';
import * as Style from './Links.style';
import { useProject } from '../../ProjectContext';

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

  const getLinks = (variants) => (
    <Style.Links variants={variants}>
      <CircleButtons isPending={isPending} object={project} section="links" isStatic={false}>
        <CircleButton name="github" icon={faGithub}>
          github
        </CircleButton>
        <CircleButton name="live" icon={faWifi}>
          live
        </CircleButton>
      </CircleButtons>
    </Style.Links>
  );

  return isPending ? getLinks(null) : project && getLinks(buttonVariants);
}
