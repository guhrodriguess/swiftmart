import CartButton from "../CartButton";
import SearchBar from "../SearchBar";
import { HeaderComponent, Nav, NavLogo } from "./styles";

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
