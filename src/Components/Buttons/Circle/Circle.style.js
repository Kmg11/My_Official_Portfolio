import styled from 'styled-components';

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.2rem;
  justify-content: start;
  align-items: center;
`;

export const ButtonIcon = styled.span`
  color: ${(p) => p.theme.colors.whiteColor};
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid ${(p) => p.theme.colors.whiteColor};
  border-radius: 50%;
  font-size: 1rem;
  transition-property: background-color, border-color;
  transition: 0.2s linear;
`;

export const ButtonName = styled.span`
  color: ${(p) => p.theme.colors.whiteColor};
  font-size: 1.1rem;
  text-transform: capitalize;
`;

export const Button = styled.a`
  display: grid;
  grid-template-columns: repeat(2, auto);
  place-items: center;
  gap: 10px;

  &:hover,
  &:focus {
    ${ButtonIcon} {
      background-color: ${(p) => p.theme.colors.mainColor};
      border-color: ${(p) => p.theme.colors.mainColor};
    }
  }
`;
