import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Functions } from '../../../../Style';

export const Description = styled(motion.p)`
  color: ${(p) => p.theme.colors.whiteColor};
  width: 400px;
  line-height: 1.5;

  ${Functions.mediaBreakpointDown('xs')} {
    width: 100%;
  }
`;
