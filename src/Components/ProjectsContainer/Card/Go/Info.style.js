import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Go = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;
