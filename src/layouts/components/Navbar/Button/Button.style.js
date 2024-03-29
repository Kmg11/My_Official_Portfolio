import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  ${(p) => p.theme.breakpoints.up('md')} {
    display: none;
  }

  ${(p) => p.theme.breakpoints.down('sm')} {
    cursor: pointer;
    position: relative;
    z-index: 5;
    width: 30px;
    border: none;
  }
`;

export const Line = styled.span`
  ${(p) => p.theme.breakpoints.down('sm')} {
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${(p) => p.theme.colors.whiteBackgroundColor};
    border-radius: 10px;

    &:nth-of-type(1) {
      animation: Out1 0.7s backwards;
      animation-direction: reverse;
    }

    &:nth-of-type(2) {
      margin-top: 5px;
      margin-bottom: 5px;
      animation: Out2 0.7s backwards;
      animation-direction: reverse;
    }

    &:nth-of-type(3) {
      animation: Out3 0.7s backwards;
      animation-direction: reverse;
    }

    ${(props) =>
      props.isNavbarOpen &&
      css`
        &:first-of-type {
          animation: In1 0.7s forwards;
        }

        &:nth-of-type(2) {
          animation: In2 0.7s forwards;
        }

        &:last-of-type {
          animation: In3 0.7s forwards;
        }
      `}
  }

  @keyframes In1 {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(9px) rotate(0deg);
    }
    100% {
      transform: translateY(9px) rotate(135deg);
    }
  }

  @keyframes Out1 {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(9px) rotate(0deg);
    }
    100% {
      transform: translateY(9px) rotate(135deg);
    }
  }

  @keyframes In2 {
    50% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes Out2 {
    50% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes In3 {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-9px) rotate(0deg);
    }
    100% {
      transform: translateY(-9px) rotate(135deg);
    }
  }

  @keyframes Out3 {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-9px) rotate(0deg);
    }
    100% {
      transform: translateY(-9px) rotate(135deg);
    }
  }
`;
