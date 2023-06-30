import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import GlobalStyle, { Container } from "./styles/global.ts";
import Header from "./components/Header/index.tsx";
import Home from "./pages/Home/index.tsx";
import PhoneSlider from "./pages/PhoneSlider/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Container>
      <Header />
      <Home />
      <PhoneSlider />
    </Container>
  </ThemeProvider>
);
