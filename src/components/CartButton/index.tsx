// React Hooks
import { useContext } from "react";

// Icon
import { ShoppingCart } from "@phosphor-icons/react";

// Styles
import { Button } from "./styles";

// Context
import AppContext from "../../contexts/AppContext";

// CartButton Component
export default function CartButton() {
    const { cartItems, setIsCartVisible } = useContext(AppContext);

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
