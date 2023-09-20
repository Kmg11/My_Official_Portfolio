import { css } from 'styled-components';
import { Colors } from '../Variables';

export const backgroundImage = (backgroundImg) => css`
  background-color: ${Colors.backgroundColor};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${backgroundImg});
`;
