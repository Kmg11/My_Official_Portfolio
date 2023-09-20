import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ImageContainer = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;

  ${(p) => p.theme.breakpoints.down('sm')} {
    width: 50px;
    height: 50px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
