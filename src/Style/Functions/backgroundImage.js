import { css } from 'styled-components';

export const backgroundImage = (backgroundImg) => css`
  background-color: ${(p) => p.theme.colors.backgroundColor};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${backgroundImg});
`;
