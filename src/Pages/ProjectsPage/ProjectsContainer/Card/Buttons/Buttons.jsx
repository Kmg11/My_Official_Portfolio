import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { CircleButtons, CircleButton } from '../../../../../components';
import * as Style from './Buttons.style';
import { useInfo } from '../InfoContext';

export function Buttons() {
  const info = useInfo();

  return (
    <Style.Buttons>
      <CircleButtons isPending={false} object={info} section="links" isStatic={false}>
        <CircleButton name="github" icon={faGithub}>
          github
        </CircleButton>
        <CircleButton name="live" icon={faWifi}>
          live
        </CircleButton>
      </CircleButtons>
    </Style.Buttons>
  );
}
