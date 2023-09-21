import styled from 'styled-components';
import { skeletonStyle } from '../skeletons.style';

export const SkeletonBox = styled.div`
  ${skeletonStyle};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  border-radius: ${(props) => (props.radius ? props.radius : 'inherit')};
`;
