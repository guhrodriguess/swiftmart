import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import GlobalStyle, { Container } from "./styles/global.ts";
import Header from "./components/Header";

import Provider from "./contexts/Provider";
import SearchPage from "./pages/SearchPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import ScrollTop from "./components/ScrollTop";
import PurchasePage from "./pages/PurchasePage";
import PrivateRoute from "./routes/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Router>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Toast />
            <Container>
                <Provider>
                    <Header />
                    <Cart />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route
                            path="/purchase"
                            element={
                                <PrivateRoute>
                                    <PurchasePage />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </Provider>
                <ScrollTop />
            </Container>
            <Footer />
        </ThemeProvider>
    </Router>
);
