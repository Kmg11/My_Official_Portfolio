import {
  faClipboard,
  faCodeBranch,
  faLink,
  faStar,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { Box } from '../../../../../components';
import { useProject } from '../../ProjectContext';

export function SmallScreens() {
  const { project, isPending } = useProject();

  return (
    <>
      <Box
        title="technologies"
        icon={faTools}
        isPending={isPending}
        data={project}
        section="technologies"
      />

      <Box title="features" icon={faStar} data={project} section="features" isPending={isPending} />

      <Box title="notes" icon={faClipboard} data={project} section="notes" isPending={isPending} />

      <Box
        title="versions"
        icon={faCodeBranch}
        isPending={isPending}
        data={project}
        section="versions"
        isLink
      />

      <Box
        title="other links"
        icon={faLink}
        isPending={isPending}
        data={project}
        section="other_links"
        isLink
      />

      <Box
        title="how to use"
        icon={faClipboard}
        data={project}
        section="how_to_use"
        isPending={isPending}
      />
    </>
  );
}
