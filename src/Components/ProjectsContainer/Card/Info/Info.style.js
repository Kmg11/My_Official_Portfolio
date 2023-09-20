import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  width: 100%;
  background-color: ${(p) => p.theme.colors.secondBackgroundColor};
  padding: 1.25rem;
  opacity: 0;
  visibility: hidden;
  z-index: 0;
  transition-property: visibility, opacity, z-index;
  transition: 0.2s linear;
  display: grid;
  gap: 1rem;
`;

export const Box = styled.div`
  display: grid;
  gap: 0.7rem;
`;

export const Title = styled.h4`
  color: ${(p) => p.theme.colors.whiteColor};
  text-transform: capitalize;
  font-size: 1rem;
`;

export const Description = styled.p`
  color: ${(p) => p.theme.colors.textColor};
  line-height: 1.6;
  font-size: 0.9rem;
`;

export const Dots = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  line-height: 0;
  color: ${(p) => p.theme.colors.whiteColor};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: -0.625rem;
  margin-left: -0.3125rem;
  margin-right: -0.3125rem;
`;

export const Item = styled.li`
  color: ${(p) => p.theme.colors.textColor};
  border: 1px solid ${(p) => p.theme.colors.whiteColor};
  text-align: center;
  padding: 5px 15px;
  font-size: 0.8rem;
  margin-bottom: 0.625rem;
  margin-right: 0.3125rem;
  margin-left: 0.3125rem;
  cursor: pointer;
  text-transform: capitalize;
  transition-property: border-color, background-color;
  transition-duration: 0.2s;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.mainColor};
    border-color: ${(p) => p.theme.colors.mainColor};
  }
`;
