import styled, { css } from 'styled-components';
import { skeletonStyle } from '../skeletons.style';

export const SkeletonText = styled.span`
  ${skeletonStyle};
  border-radius: 4px;
  display: block;

  ${(props) =>
    props.head
      ? css`
          height: 1.5rem;
          width: ${props.width ? props.width : '100%'};
          margin-bottom: 0.625rem;
        `
      : css`
          height: 1rem;

          &:not(:last-of-type) {
            width: ${props.width ? props.width : '100%'};
            margin-bottom: 0.625rem;
          }

          &:last-of-type {
            width: ${props.width ? props.width : '80%'};
          }
        `}
`;
