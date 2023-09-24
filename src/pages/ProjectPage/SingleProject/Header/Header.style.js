import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled(motion.header)`
  width: 100%;
  min-height: 500px;
  height: 100vh;
  position: relative;
  display: grid;
  align-items: center;

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

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  gap: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  ${(p) => p.theme.breakpoints.down('sm')} {
    padding-left: 0;
    padding-right: 0;
  }

  ${(p) => p.theme.breakpoints.only('md')} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
