import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderComponent = styled.header`
    padding: 1rem 0.5rem;
    background-color: ${(props) => props.theme.background};
    width: 100%;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`;

export const NavLogo = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.black};

    h1 {
        span {
            color: ${(props) => props.theme.primary};
        }

        @media (max-width: 940px) {
            font-size: 1.5rem;
        }
    }
`;
