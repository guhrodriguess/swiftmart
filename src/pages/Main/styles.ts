import styled from "styled-components";
import { fadeIn } from "@/styles/global";

export const MainComponent = styled.section`
  width: 100%;
  height: 70vh;
  padding: 0 0.5rem;
  animation: ${fadeIn} 0.6s ease;
  background-color: ${(props) => props.theme.white};
`;

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 600px;
    width: 100%;

    @media (max-width: 940px) {
      display: none;
    }
  }

  @media (max-width: 940px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 600px;
  width: 100%;

  @media (max-width: 940px) {
    text-align: center;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    width: 100%;
  }

  h1 {
    font-size: 2.5rem;

    span {
      color: ${(props) => props.theme.primary};
    }
  }

  a {
    text-decoration: none;
  }

  .button {
    display: flex;
    align-items: center;
    padding: 1.2rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 15px;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    width: max-content;

    &:hover {
      background: ${(props) => props.theme.secondary};
    }
  }
`;
