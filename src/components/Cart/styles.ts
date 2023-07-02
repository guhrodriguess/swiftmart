import styled from "styled-components";

export const CartWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    height: calc(100vh - 5.4rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    margin-top: 5.4rem;
    padding: 1rem 1.5rem;
    background-color: ${(props) => props.theme.white};
    transition: all 400ms ease;
    border-radius: 15px 0 0 15px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${(props) => props.theme.gray};
        border: 3.5px solid ${(props) => props.theme.white};
    }
`;

export const CartList = styled.div`
    flex-grow: 1;
    overflow: auto;
`;

export const CartResume = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 35px 0 15px;
    color: ${(props) => props.theme.primary};
    border-top: 1px solid ${(props) => props.theme.gray};
`;
