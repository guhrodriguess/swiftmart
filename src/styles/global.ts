import styled, { createGlobalStyle } from "styled-components";

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

  body {
    background-color: ${(props) => props.theme.bg_primary};
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
  max-width: 1500px;
  margin: 0 auto;
`;

export default GlobalStyle;
