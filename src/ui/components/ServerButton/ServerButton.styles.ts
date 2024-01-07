import styled from "styled-components";

import { ServerButtonProps } from "./ServerButton";

export const Button = styled.button<ServerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  margin-bottom: 8px;
  border-radius: 50%;

  background-color: ${(props) =>
    props.isHome ? "var(--rocketseat)" : "var(--primary)"};

  position: relative;
  cursor: pointer;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
  }

  &::after {
  }

  transition: border-radius .2s, background-color .2s;

  &:hover {
  }

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) => (props.isHome ? "var(--rocketseat)" : "var(--discord)")};
  }
`;
