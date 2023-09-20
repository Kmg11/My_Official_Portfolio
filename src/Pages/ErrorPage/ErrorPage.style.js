import styled from 'styled-components';

export const ErrorPage = styled.section`
  position: relative;
  min-height: 100vh;

  &::before {
    content: '';
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #000, transparent);
  }
`;

export const Content = styled.section`
  background-color: ${(p) => p.theme.colors.backgroundColor};
  min-height: 100vh;
  position: relative;
  z-index: 3;
  background-color: transparent;
  display: grid;
  place-items: center;
`;

export const CoverImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
