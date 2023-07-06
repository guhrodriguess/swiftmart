import styled from "styled-components";

export const CartWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    padding: 1rem 1.5rem;
    background-color: ${(props) => props.theme.white};
    transition: all 400ms ease;
    border-radius: 25px 0 0 25px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${(props) => props.theme.gray};
        border: 3.5px solid ${(props) => props.theme.white};
    }

    hr {
        width: 50%;
        height: 5px;
        border: none;
        background: ${(props) => props.theme.primary};
        border-radius: 15px;
    }

    button {
        background: none;
        border: none;
        font-size: 0.8rem;
        cursor: pointer;
    }

    #close {
        margin: 1rem;
        position: absolute;
        top: 0;
        right: 0;
        transition: all 0.2s ease-in-out;

        &:hover {
            color: ${(props) => props.theme.red};
        }
    }

    #buy {
        display: flex;
        align-items: center;
        margin: 0 auto;
        gap: 0.2rem;
        color: ${(props) => props.theme.secondary};
        font-weight: 600;
        position: relative;
        padding-bottom: 5px;

        &::after {
            content: "";
            width: 0;
            height: 2px;
            display: block;
            background: ${(props) => props.theme.primary};
            left: 50%;
            transform: translateX(-50%);
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

        &:hover #arrowRight {
            color: ${(props) => props.theme.primary};
            transform: translateX(2px);
        }
    }

    #arrowRight {
        transition: all 0.2s ease-in-out;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3rem 0 2rem 0;

    span {
        font-size: 0.8rem;
    }

    button {
        font-size: 0.8rem;
        font-weight: 600;
        color: ${(props) => props.theme.primary};
        cursor: pointer;
        position: relative;
        padding-bottom: 3px;

        &::after {
            content: "";
            width: 0;
            height: 2px;
            display: block;
            background: ${(props) => props.theme.primary};
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
    }
`;

export const CartList = styled.div`
    flex-grow: 1;
    overflow: auto;
`;

export const CartResume = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0 15px;
    border-top: 1px solid ${(props) => props.theme.gray};

    span {
        font-size: 0.9rem;
        font-weight: 600;
    }

    p {
        color: ${(props) => props.theme.primary};
        font-weight: 700;
    }
`;

export const PageOpacity = styled.div`
    width: 100%;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    background-color: ${(props) => props.theme.black_opacity};
`;
