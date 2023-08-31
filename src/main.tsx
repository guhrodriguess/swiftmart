import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@/styles/themes/default.ts";
import GlobalStyle, { Container } from "@/styles/global.ts";

import { BrowserRouter as Router } from "react-router-dom";

import Provider from "@/contexts/Provider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import Toast from "@/components/Toast";
import ScrollTop from "@/components/ScrollTop";

import { AllRoutes } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Toast />
      <Container>
        <Provider>
          <Header />
          <Cart />
          <AllRoutes />
        </Provider>
        <ScrollTop />
      </Container>
      <Footer />
    </ThemeProvider>
  </Router>
);
