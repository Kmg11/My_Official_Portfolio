import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsContainer = styled(motion.section)`
  overflow: hidden;
  padding: 2.5rem 2.5rem 20rem;

  ${(p) => p.theme.breakpoints.down('sm')} {
    padding: 2.5rem 1.5rem 20rem;
  }
`;
