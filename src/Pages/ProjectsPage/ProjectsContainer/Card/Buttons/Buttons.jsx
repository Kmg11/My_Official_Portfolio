import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { CircleButton } from '../../../../../components';
import { useInfo } from '../InfoContext';
import * as Style from './Buttons.style';

export function Buttons() {
  const info = useInfo();

  return (
    <Style.Buttons>
      <CircleButton to={info.links.github} icon={faGithub}>
        github
      </CircleButton>
      <CircleButton to={info.links.live} icon={faWifi}>
        live
      </CircleButton>
    </Style.Buttons>
  );
}
