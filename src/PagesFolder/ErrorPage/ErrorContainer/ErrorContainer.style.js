import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ErrorContainer = styled(motion.section)``;

export const Inner = styled.div`
  display: grid;
  gap: 0.8rem;
  align-items: start;
  text-align: center;
`;

export const Title = styled(motion.h1)`
  color: ${(p) => p.theme.colors.whiteColor};
  text-transform: capitalize;
  font-size: 7rem;
`;

export const Type = styled(motion.p)`
  color: ${(p) => p.theme.colors.whiteColor};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5rem;
`;

export const Description = styled(motion.p)`
  color: ${(p) => p.theme.colors.whiteColor};
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;

  ${(p) => p.theme.breakpoints.up('sm')} {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  ${(p) => p.theme.breakpoints.down('xs')} {
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: start;
    gap: 1.5rem;
  }
`;
