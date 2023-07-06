// CartButton Component
import CartButton from "../CartButton";

// SearchBar Component
import SearchBar from "../SearchBar";

// Styles
import { HeaderComponent, Nav, NavLogo } from "./styles";

// Header Component
export default function Header() {
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
            </Nav>
        </HeaderComponent>
    );
}
