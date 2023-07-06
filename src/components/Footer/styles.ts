import styled from "styled-components";

export const FooterComponent = styled.footer`
    padding: 1.5rem 0;
    background-color: ${(props) => props.theme.primary};
    border-radius: 25px 25px 0 0;

    ::selection {
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme.primary};
    }
`;

export const Content = styled.div`
    max-width: 1500px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    @media (max-width: 500px) {
        flex-direction: column;
    }

    h1 {
        font-size: 1.7rem;
        color: ${(props) => props.theme.white};
    }

    h3 {
        user-select: none;
        color: ${(props) => props.theme.white};

        @media (max-width: 500px) {
            display: none;
        }
    }

    p {
        font-weight: 500;
        font-size: 0.9rem;
        color: ${(props) => props.theme.tertiary};
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.tertiary};
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

            @media (max-width: 940px) {
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
