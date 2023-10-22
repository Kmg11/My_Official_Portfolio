import { useTheme } from 'styled-components';
import { Slider } from './Slider/Slider';
import { SmallScreens } from './SmallScreens/SmallScreens';
import { BigScreens } from './BigScreens/BigScreens';
import * as Style from './Info.style';
import { Container } from '../../../../layouts';

export function Info() {
  const theme = useTheme();
  const sm = theme.breakpoints.down('sm').replace('@media ', '');

  return (
    <Style.Info>
      <Container>
        <Slider />

        <Style.Row>{window.matchMedia(sm).matches ? <SmallScreens /> : <BigScreens />}</Style.Row>
      </Container>
    </Style.Info>
  );
}
