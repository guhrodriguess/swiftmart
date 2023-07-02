import styled from "styled-components";
import { fadeIn, float } from "../../styles/global";

export const MainComponent = styled.section`
    width: 100%;
    height: 80vh;
    padding: 0 0.5rem;
    animation: ${fadeIn} 0.6s ease;
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
    margin: 0 1rem;
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
