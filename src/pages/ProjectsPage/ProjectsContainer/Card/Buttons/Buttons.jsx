import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { CircleButton } from '../../../../../components';
import { useInfo } from '../InfoContext';
import * as Style from './Buttons.style';

export function Buttons() {
  const info = useInfo();

  if (!info.links) return null;

  return (
    <Style.Buttons>
      <CircleButton to={info.links.github} icon={faGithub}>
        github
      </CircleButton>

      {info.links.live && (
        <CircleButton to={info.links.live} icon={faWifi}>
          live
        </CircleButton>
      )}
    </Style.Buttons>
  );
}
