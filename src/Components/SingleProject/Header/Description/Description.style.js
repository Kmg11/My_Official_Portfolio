import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Description = styled(motion.p)`
  color: ${(p) => p.theme.colors.whiteColor};
  width: 400px;
  line-height: 1.5;

  ${(p) => p.theme.breakpoints.down('xs')} {
    width: 100%;
  }
`;
