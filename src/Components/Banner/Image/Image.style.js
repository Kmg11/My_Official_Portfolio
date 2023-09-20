import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ImageContainer = styled(motion.div)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.backgroundColor};
`;
