import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Home = styled.section`
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;

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

export const Content = styled(motion.div)`
  z-index: 3;
`;

export const CoverImage = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
