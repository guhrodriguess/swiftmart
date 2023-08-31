import styled from "styled-components";
import { fadeIn } from "@/styles/global";

export const NotFoundComponent = styled.section`
  width: 100%;
  height: calc(100vh - 10rem);
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin: 0 1rem;
  animation: ${fadeIn} 0.6s ease;

  p {
    font-weight: 500;
  }

  button {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 15px;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.secondary};
    }
  }
`;
