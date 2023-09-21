import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Box = styled(motion.div)``;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  gap: 1rem;
`;

export const Icon = styled.span`
  color: ${(p) => p.theme.colors.mainColor};
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 15px;
  align-items: center;
  padding: 15px;
  background-color: ${(p) => p.theme.colors.secondBackgroundColor};
  border-left: 5px solid ${(p) => p.theme.colors.mainColor};

  &:hover,
  &:focus {
    ${Icon} {
      transition: color 0.2s linear;
      color: ${(p) => p.theme.colors.whiteColor};
    }
  }
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.whiteColor};
  line-height: 1.6;
`;

export const Link = styled.a`
  color: ${(p) => p.theme.colors.whiteColor};
`;
