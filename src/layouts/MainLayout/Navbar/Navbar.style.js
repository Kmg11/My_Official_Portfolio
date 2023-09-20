import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Navbar = styled(motion.nav)`
  position: relative;
  z-index: 1000;
  min-height: 500px;
  height: 100%;
  max-height: 100%;
  background-color: ${(p) => p.theme.colors.mainColor};
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  ${(p) => p.theme.breakpoints.down('sm')} {
    min-height: 0;
    max-height: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
  }
`;
