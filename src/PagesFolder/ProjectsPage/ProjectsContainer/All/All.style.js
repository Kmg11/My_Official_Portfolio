import styled from 'styled-components';

export const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  ${(p) => p.theme.breakpoints.down('md')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${(p) => p.theme.breakpoints.down('xs')} {
    grid-template-columns: 1fr;
  }
`;
