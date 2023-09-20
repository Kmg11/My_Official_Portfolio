import styled from 'styled-components';
import { Functions, Variables } from '../../Style';

export const MainLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;

  ${Functions.mediaBreakpointDown('sm')} {
    grid-template-columns: 1fr;
  }
`;

export const MainLayoutContent = styled.div`
  background-color: ${Variables.Colors.backgroundColor};
  overflow: auto;
`;
