import { css } from 'styled-components';

export const center = (centerWith) => {
  switch (centerWith) {
    case 'position':
      return css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;
    case 'grid':
      return css`
        display: grid;
        place-items: center;
      `;
    case 'flex':
      return css`
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    default:
      return false;
  }
};
