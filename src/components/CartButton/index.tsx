import { useContext } from "react";

import { ShoppingCart } from "@phosphor-icons/react";

import * as Styles from "./styles";

import AppContext from "@/contexts/AppContext";

export default function CartButton() {
    const { cartItems, setIsCartVisible } = useContext(AppContext);

    const handleCartBar = () => {
        setIsCartVisible(true);
        document.body.style.overflow = "hidden";
    };

    return (
        <Styles.Button onClick={handleCartBar}>
            <ShoppingCart weight="bold" size={28} />
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
        </Styles.Button>
    );
}
