import styled from "styled-components";
import { fadeIn } from "../../styles/keyframes";

export const PurchaseComponent = styled.section`
    width: 100%;
    height: 100vh;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${(props) => props.theme.gray};
        border: 3.5px solid ${(props) => props.theme.white};
    }
`;

export const PurchaseWrapper = styled.div`
    display: grid;
    place-items: center;
    margin-top: 5rem;
    animation: ${fadeIn} 0.6s ease;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0.5rem;
`;

export const Title = styled.h1`
    margin-bottom: 1.5rem;

    hr {
        width: 100%;
        height: 5px;
        border: none;
        background: ${(props) => props.theme.primary};
        border-radius: 15px;
    }
`;

export const CartList = styled.div`
    max-height: 400px;
    height: 100%;
    flex-grow: 1;
    overflow: auto;
    margin-top: 2rem;
    margin: 0 1.5rem;
`;

export const CartResume = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.1875rem 0;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.gray};

    p {
        font-weight: 600;
        font-size: 0.9rem;

        #divider {
            user-select: none;
        }

        span {
            color: ${(props) => props.theme.primary};
            font-size: 1rem;
            font-weight: 700;
        }
    }
`;

export const ConfirmComponent = styled.div`
    display: flex;
    justify-content: center;

    button {
        background: transparent;
        padding: 1rem;
        border-radius: 15px;
        color: ${(props) => props.theme.primary};
        border: 2px solid ${(props) => props.theme.primary};
        cursor: pointer;
        font-weight: 500;
        transition: all 0.2s ease-in-out;

        &:hover {
            background: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.white};
        }
    }
`;

export const ModalComponent = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${(props) => props.theme.black_opacity};
`;

export const ModalWrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    margin: 0 2rem;
`;

export const Modal = styled.div`
    max-width: 400px;
    width: 100%;
    height: 250px;
    background-color: ${(props) => props.theme.background};
    border-radius: 25px;
    animation: ${fadeIn} 0.6s ease;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    gap: 1rem;
    max-width: 200px;
    margin: 0 auto;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        background: ${(props) => props.theme.success};
        color: ${(props) => props.theme.black};
        border: none;
        border-radius: 50px;
    }

    .title {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    p {
        font-weight: 500;
        margin: 0.4rem 0;
        font-size: 0.9rem;

        span {
            font-weight: 600;
            color: ${(props) => props.theme.primary};
        }
    }

    #back {
        background: transparent;
        padding: 0.5rem 1rem;
        border-radius: 15px;
        gap: 0.4rem;
        color: ${(props) => props.theme.primary};
        border: 2px solid ${(props) => props.theme.primary};
        cursor: pointer;
        font-weight: 500;
        transition: all 0.2s ease-in-out;

        &:hover {
            background: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.white};

            #arrowLeft {
                transform: translateX(-2px);
            }
        }
    }

    #arrowLeft {
        transition: all 0.2s ease-in-out;
    }
`;
