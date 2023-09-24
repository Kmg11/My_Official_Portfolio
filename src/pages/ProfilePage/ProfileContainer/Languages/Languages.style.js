import styled from 'styled-components';

export const Languages = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    ${(p) => p.theme.breakpoints.down('xs')} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
