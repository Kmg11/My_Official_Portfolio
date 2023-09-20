import styled from 'styled-components';
import { Functions, Variables } from '../../Style';

export const Error = styled.section`
  position: relative;
  min-height: 100vh;

  &::before {
    content: '';
    z-index: 2;
    ${Functions.overlay(null, 'linear-gradient(to right, #000, transparent)')};
  }
`;

export const Content = styled.section`
  background-color: ${Variables.Colors.backgroundColor};
  min-height: 100vh;
  position: relative;
  z-index: 3;
  background-color: transparent;
  ${Functions.center('grid')};
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
