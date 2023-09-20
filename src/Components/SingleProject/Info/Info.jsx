import { Components, Functions } from '../../../Style';
import { Slider } from './Slider/Slider';
import { SmallScreens } from './SmallScreens/SmallScreens';
import { BigScreens } from './BigScreens/BigScreens';
import * as Style from './Info.style';

export function Info() {
  const xs = Functions.mediaBreakpointDown('xs').replace('@media ', '');

  return (
    <Style.Info>
      <Components.Container>
        <Slider />

        <Style.Row>{window.matchMedia(xs).matches ? <SmallScreens /> : <BigScreens />}</Style.Row>
      </Components.Container>
    </Style.Info>
  );
}
