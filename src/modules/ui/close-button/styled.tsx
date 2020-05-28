import styled from "styled-components";

export const Wrapper = styled.button`
  border: 0;
  outline: 0;
  color: ${(props): string => props.theme.colors.white};
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &:hover svg {
    fill: ${(props): string => props.theme.colors.primary};
  }
`;
