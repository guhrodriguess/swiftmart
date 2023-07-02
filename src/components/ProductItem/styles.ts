import styled from "styled-components";

export const ProductComponent = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  h4 {
    font-weight: 600;
  }

  span {
    margin: 0.7rem 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${(props) => props.theme.secondary};
  }

  button {
    padding: 0.5rem 1.5rem;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 10px;
    background: transparent;
    color: ${(props) => props.theme.primary};
    border: 2px solid ${(props) => props.theme.primary};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: 820px) {
    align-items: center;
    text-align: center;
  }
`;
