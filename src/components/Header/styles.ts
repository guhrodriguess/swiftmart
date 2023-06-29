import styled from "styled-components";

export const HeaderComponent = styled.header`
  padding: 1rem 0.5rem;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.h1`
  span {
    color: ${(props) => props.theme.primary};
  }
`;
