import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    justify-content: center;
`;

export const InputWrapper = styled.div`
    border-radius: 15px;
    display: flex;
    align-items: center;
    position: relative;
    max-width: 500px;
    width: 100%;

    input {
        width: 100%;
        padding: 1rem 2rem 1rem 0.8rem;
        background: transparent;
        border: 1px solid ${(props) => props.theme.border};
        font-weight: 500;
        border-radius: 15px;

        &:focus {
            outline: 2px solid ${(props) => props.theme.primary};
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        background: transparent;
        border: none;
        padding: 0rem 1rem;
        right: 0;
        cursor: pointer;
    }
`;
