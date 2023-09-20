import { Routes } from '../../../../Constants';
import * as Style from './Info.style';
import { useInfo } from '../InfoContext';

export function Info() {
  const { id, type, title, description, technologies } = useInfo();

  const sliceDescription = description.length > 100 ? description.slice(0, 100) : description;

  const technologiesList = technologies.map((item, index) => (
    <Style.Item key={index}>{item}</Style.Item>
  ));

  return (
    <Style.Info>
      <Style.Box>
        <Style.Title>{title}</Style.Title>
        <Style.Description>
          {sliceDescription}{' '}
          <Style.Dots to={`${Routes.PROJECT}/${type}/${id}/${title}`}>...</Style.Dots>
        </Style.Description>
      </Style.Box>

      <Style.Box>
        <Style.Title>Technologies</Style.Title>
        <Style.List>{technologiesList}</Style.List>
      </Style.Box>
    </Style.Info>
  );
}
