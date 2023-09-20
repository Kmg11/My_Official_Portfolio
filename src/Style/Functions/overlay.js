import { css } from 'styled-components';

export const overlay = (backgroundColor, backgroundImage) => css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;

  ${backgroundColor &&
  css`
    background-color: ${backgroundColor};
  `}

  ${backgroundImage &&
  css`
    background-image: ${backgroundImage};
  `}
`;

export const overlayTransparent = () => css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
