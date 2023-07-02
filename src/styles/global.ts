import styled, { createGlobalStyle, keyframes } from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    html {
      scroll-behavior: smooth;
    }

    ::-webkit-scrollbar{
      width: 10px;
    }

    ::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background: ${(props) => props.theme.primary};
      border: 3.5px solid ${(props) => props.theme.white};
    }

    ::selection {
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
    }

    body {
      background-color: ${(props) => props.theme.background};
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }

    header,
    img,
    button,
    input {
      user-select: none;
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1450px;
    margin: 0 auto;
    padding: 0 1rem;
`;

export const ProductCard = styled.section`
    padding: 0 0.5rem;

    .swiper-button-prev {
        color: ${(props) => props.theme.primary};
    }

    .swiper-button-next {
        color: ${(props) => props.theme.primary};
    }

    .info {
        hr {
            width: 5%;
            height: 5px;
            border: none;
            background: ${(props) => props.theme.primary};
            border-radius: 15px;
        }

        @media (max-width: 940px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const fadeIn = keyframes`
    from {
      opacity: 0.4;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }  
`;

export const float = keyframes`
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
`;

export const spin = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
`;

export const scrollAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default GlobalStyle;
