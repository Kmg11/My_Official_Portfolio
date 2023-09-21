import { useTheme } from 'styled-components';
import { Slider } from './Slider/Slider';
import { SmallScreens } from './SmallScreens/SmallScreens';
import { BigScreens } from './BigScreens/BigScreens';
import * as Style from './Info.style';
import { Container } from '../../../../layouts';

export function Info() {
  const theme = useTheme();
  const xs = theme.breakpoints.down('xs').replace('@media ', '');

  return (
    <Style.Info>
      <Container>
        <Slider />

        <Style.Row>{window.matchMedia(xs).matches ? <SmallScreens /> : <BigScreens />}</Style.Row>
      </Container>
    </Style.Info>
  );
}
