import AppContext from "../../contexts/appContext";
import CartButton from "../CartButton";
import SearchBar from "../SearchBar";
import { HeaderComponent, Nav, NavLogo, PageOpacity } from "./styles";
import { useContext } from "react";

export default function Header() {
    const { isCartVisible } = useContext(AppContext);

    return (
        <HeaderComponent>
            <Nav>
                <NavLogo to="/">
                    <h1>
                        Swift<span>Mart.</span>
                    </h1>
                </NavLogo>
                <SearchBar />
                <CartButton />
                {isCartVisible && <PageOpacity />}
            </Nav>
        </HeaderComponent>
    );
}
