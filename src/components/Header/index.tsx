import CartButton from "../CartButton";
import SearchBar from "../SearchBar";
import { HeaderComponent, Nav, NavLogo } from "./styles";

export default function Header() {
  return (
    <HeaderComponent>
      <Nav>
        <NavLogo>
          Swift<span>Mart.</span>
        </NavLogo>

        <SearchBar />

        <CartButton />
      </Nav>
    </HeaderComponent>
  );
}
