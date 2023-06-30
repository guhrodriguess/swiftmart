import styled from "styled-components";

export const HomeComponent = styled.section`
  width: 100%;
  min-height: 80vh;
  padding: 0 0.5rem;
`;

export const HomeLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
`;

export const Content = styled.div`
  h1 {
    font-size: 2.5rem;

    span {
      color: ${(props) => props.theme.primary};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1.2rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 15px;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: ${(props) => props.theme.secondary};
    }
  }

  .buttons {
    margin: 2rem 0;
  }
`;
