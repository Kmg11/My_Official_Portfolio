import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Description = styled(motion.p)`
  color: ${(p) => p.theme.colors.whiteColor};
  font-size: 1.125rem;
  font-weight: 300;
  margin-top: 0.225rem;
  margin-bottom: 0.625rem;
  line-height: 1.7;
`;
