import { CoverImage } from './CoverImage/CoverImage';
import { Badge } from './Badge/Badge';
import { Name } from './Name/Name';
import { Description } from './Description/Description';
import { Links } from './Links/Links';
import * as Style from './Header.style';
import { Container } from '../../../../layouts';

export function Header() {
  return (
    <Style.Header initial="hidden" animate="visible">
      <CoverImage />

      <Container>
        <Style.Content>
          <Badge />
          <Name />
          <Description />
          <Links />
        </Style.Content>
      </Container>
    </Style.Header>
  );
}
