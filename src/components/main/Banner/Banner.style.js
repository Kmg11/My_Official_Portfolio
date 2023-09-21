import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Banner = styled(motion.section)`
  max-width: max-content;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.25rem;
  place-items: center;

  ${(p) => p.theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
  }
`;

export const Info = styled.div`
  min-width: 250px;
  max-width: 300px;
`;
