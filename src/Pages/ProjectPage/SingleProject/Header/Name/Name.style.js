import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Name = styled(motion.h1)`
  color: ${(p) => p.theme.colors.titlesColor};
  text-transform: capitalize;
  width: max-content;
`;
