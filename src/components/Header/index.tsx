import CartButton from "@/components/CartButton";

import SearchBar from "@/components/SearchBar";

import * as Styles from "./styles";

export default function Header() {
    return (
        <Styles.HeaderComponent>
            <Styles.Nav>
                <Styles.NavLogo to="/">
                    <h1>
                        Swift<span>Mart.</span>
                    </h1>
                </Styles.NavLogo>
                <SearchBar />
                <CartButton />
            </Styles.Nav>
        </Styles.HeaderComponent>
    );
}
