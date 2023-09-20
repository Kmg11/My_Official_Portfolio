import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Item = styled(motion.li)``;

export const Name = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 3;
  transform: translate(10%, -50%);
  background-color: ${(p) => p.theme.colors.whiteBackgroundColor};
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 0.9rem;
  display: block;
  font-weight: 500;
  opacity: 0;
  width: 80px;
  text-transform: capitalize;
  transition-property: opacity, transform;
  transition: 0.25s linear;

  ${(p) => p.theme.breakpoints.down('sm')} {
    position: static;
    transform: none;
    background-color: transparent;
    opacity: 1;
    width: auto;
    padding: 0;
  }
`;

export const Icon = styled.span`
  display: block;
  font-size: 1.2rem;

  ${(p) => p.theme.breakpoints.down('sm')} {
    font-size: 1rem;
  }
`;

export const Link = styled.a`
  position: relative;
  color: ${(p) => p.theme.colors.textColor};
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: color, background-color;
  transition: 0.25s linear;

  &:hover,
  &:focus,
  &.active {
    color: ${(p) => p.theme.colors.mainColor};
    background-color: ${(p) => p.theme.colors.whiteBackgroundColor};
  }

  &:hover,
  &:focus {
    ${Name} {
      opacity: 1;
      transform: translate(120%, -50%);
    }
  }

  ${(p) => p.theme.breakpoints.down('sm')} {
    gap: 10px;
    justify-content: start;
    border-radius: 10px;
    width: 100%;
    height: auto;
    padding: 20px;

    &.active {
      color: ${(p) => p.theme.colors.whiteColor};
      background-color: ${(p) => p.theme.colors.mainColor};
    }

    &:hover,
    &:focus {
      color: ${(p) => p.theme.colors.whiteColor};
      background-color: ${(p) => p.theme.colors.mainColor};

      ${Name} {
        opacity: 1;
        transform: none;
        color: ${(p) => p.theme.colors.whiteColor};
      }
    }
  }
`;
