import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Categories = styled(motion.section)`
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 1.2rem;

  ${(p) => p.theme.breakpoints.down('xs')} {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Button = styled.button`
  font-size: 1.2rem;
  padding: 20px 40px;
  background-color: ${(p) => p.theme.colors.secondBackgroundColor};
  color: ${(p) => p.theme.colors.whiteColor};
  font-size: 1rem;
  display: block;
  transition: background-color 0.2s linear;
  text-transform: capitalize;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.mainColor};
  }

  ${(props) =>
    props.active &&
    css`
      background-color: ${props.theme.colors.mainColor};
    `}

  ${(p) => p.theme.breakpoints.down('xs')} {
    padding: 20px 30px;
    width: 100%;
  }
`;
