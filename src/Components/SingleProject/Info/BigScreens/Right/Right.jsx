import { faCodeBranch, faLink, faTools } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../../../../Box/Box';
import * as Style from './Right.style';
import { useProject } from '../../../ProjectContext';

export function Right() {
  const { project, isPending } = useProject();

  return (
    <Style.Right>
      <Box
        title="technologies"
        icon={faTools}
        isPending={isPending}
        data={project}
        section="technologies"
      />

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
    </Style.Right>
  );
}
