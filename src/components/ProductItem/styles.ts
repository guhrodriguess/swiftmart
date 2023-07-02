import styled from "styled-components";

export const ProductComponent = styled.div`
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    padding: 2.5rem 1rem;

    img {
        width: 100%;
        border-radius: 50px 5px 50px 5px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 1rem 0;

    h4 {
        font-weight: 600;
    }

    span {
        margin: 0.3rem 0;
        font-size: 1.2rem;
        font-weight: 700;
        color: ${(props) => props.theme.secondary};
    }

    button {
        padding: 0.5rem 1rem;
        margin: 0.5rem 0;
        font-size: 0.7rem;
        font-weight: 700;
        border-radius: 10px;
        background: transparent;
        color: ${(props) => props.theme.primary};
        border: 4px solid ${(props) => props.theme.primary};
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            background: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.white};
        }
    }
`;
