import { faClipboard, faStar } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../../../../../../components';
import * as Style from './Left.style';
import { useProject } from '../../../ProjectContext';

export function Left() {
  const { project, isPending } = useProject();

  return (
    <Style.Left>
      <Box title="features" icon={faStar} data={project} section="features" isPending={isPending} />

      <Box title="notes" icon={faClipboard} data={project} section="notes" isPending={isPending} />

      <Box
        title="how to use"
        icon={faClipboard}
        data={project}
        section="how_to_use"
        isPending={isPending}
      />
    </Style.Left>
  );
}
