import { ShoppingCart } from "@phosphor-icons/react";
import { Button } from "./styles";
import { useContext } from "react";
import AppContext from "../../contexts/appContext";

export default function CartButton() {
    const { cartItems, isCartVisible, setIsCartVisible } =
        useContext(AppContext);

    const handleCartBar = () => {
        setIsCartVisible(true);
        document.body.style.overflow = "hidden";
    };

    return (
        <Button onClick={handleCartBar}>
            <ShoppingCart weight="bold" size={28} />
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
        </Button>
    );
}
