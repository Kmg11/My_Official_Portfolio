import styled from 'styled-components';

export const MainLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;

  ${(p) => p.theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
  }
`;

export const MainLayoutContent = styled.div`
  background-color: ${(p) => p.theme.colors.backgroundColor};
  overflow: auto;
`;
