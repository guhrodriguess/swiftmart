import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderComponent = styled.header`
  padding: 1rem 0.5rem;
  background-color: ${(props) => props.theme.white};
  width: 100%;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.black};

  h1 {
    span {
      color: ${(props) => props.theme.primary};
    }

    @media (max-width: 820px) {
      font-size: 1.5rem;
    }
  }
`;

export const PageOpacity = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 5.4rem;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  background-color: ${(props) => props.theme.black_opacity};
  backdrop-filter: blur(5px);
`;
