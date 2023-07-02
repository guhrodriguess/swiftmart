import styled from "styled-components";

export const FooterComponent = styled.footer`
  height: 20vh;
  background-color: ${(props) => props.theme.primary};
  border-radius: 50px 50px 0 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  h1 {
    color: ${(props) => props.theme.white};
  }

  p {
    font-weight: 500;
    color: #e5e7eb;
    margin: 0.5rem 0;
  }

  a {
    transition: all 0.4s;
    text-decoration: none;
    color: #e5e7eb;
    position: relative;
    padding-bottom: 6px;

    &::after {
      content: "";
      width: 0;
      height: 2px;
      display: block;
      background: ${(props) => props.theme.white};
      left: 0%;
      transform: translateX(0%);
      position: absolute;
      bottom: 0;
      transition: all 0.2s ease-in-out;

      @media (max-width: 768px) {
        height: 0px;
      }
    }

    &:hover::after {
      width: 100%;
    }

    &:hover {
      color: ${(props) => props.theme.white};
    }
  }
`;
