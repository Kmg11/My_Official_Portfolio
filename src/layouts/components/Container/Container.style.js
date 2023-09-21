import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  display: block;

  ${(p) => p.theme.breakpoints.up('xl')} {
    width: 1170px;
  }
`;
