// React
import ReactDOM from "react-dom/client";

// Styled Components
import { ThemeProvider } from "styled-components";

// Variables for Style
import { defaultTheme } from "./styles/themes/default.ts";

// Styles
import GlobalStyle, { Container } from "./styles/global.ts";

// Context
import Provider from "./contexts/Provider";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Toast from "./components/Toast";
import ScrollTop from "./components/ScrollTop";

// Pages
import Home from "./pages/Home";
import PurchasePage from "./pages/PurchasePage";
import SearchPage from "./pages/SearchPage";

// Private Route
import PrivateRoute from "./routes/PrivateRoute";

// Main
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
                        <Route
                            path="/"
                            element={<Home title="SwiftMart — Início" />}
                        />
                        <Route path="/search" element={<SearchPage />} />
                        <Route
                            path="/purchase"
                            element={
                                <PrivateRoute>
                                    <PurchasePage title="SwiftMart — Finalizar Compra" />
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
