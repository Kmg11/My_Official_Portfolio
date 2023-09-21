import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SocialLinks = styled.ul``;

export const Item = styled(motion.li)`
  display: inline-block;

  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const Link = styled.a`
  color: #9d9a9c;
  font-size: 2rem;
  display: block;
  transition-property: color, background-color;
  transition: 0.2s linear;

  /* This Code For Handling Hover Problem With Svg */
  width: 25px;
  height: 25px;
  border-radius: 5px;

  /* This Code For Handling Hover Problem With Svg */
  svg {
    position: relative;
    top: -4px;
    left: -1px;
  }

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.mainColor};
    background-color: ${(p) => p.theme.colors.whiteBackgroundColor};
  }
`;
