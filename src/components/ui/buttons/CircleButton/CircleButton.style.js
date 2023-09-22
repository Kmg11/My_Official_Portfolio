import styled from 'styled-components';

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

export const CircleButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover,
  &:focus {
    ${ButtonIcon} {
      background-color: ${(p) => p.theme.colors.mainColor};
      border-color: ${(p) => p.theme.colors.mainColor};
    }
  }
`;
