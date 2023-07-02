import styled from "styled-components";
import { spin } from "../../styles/global";

export const LoadingComponent = styled.div`
  display: grid;
  place-items: center;
  width: 100%;

  button {
    border: none;
    background: none;
    color: ${(props) => props.theme.primary};
    animation: ${spin} 1s linear infinite;
  }
`;
