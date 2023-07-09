// React Hooks
import { useContext } from "react";

// Context
import AppContext from "@/contexts/AppContext";

// Styles
import { CartWrapper, Content, Image } from "./styles";

// Icon
import { TrashSimple } from "@phosphor-icons/react";

// FormatCurrency Function
import formatCurrency from "@/utils/formatCurrency";

// CartItem Commponent
export function CartItem({ data }) {
    const { cartItems, setCartItems } = useContext(AppContext);
    const { id, thumbnail, title, price } = data;

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id != id);
        setCartItems(updatedItems);
    };

    return (
        <CartWrapper>
            <Image src={thumbnail} alt="Imagem do Produto" />
            <Content>
                <h3>{title}</h3>
                <span>{formatCurrency(price)}</span>
                <button onClick={handleRemoveItem}>
                    <TrashSimple weight="bold" size={20} />
                </button>
            </Content>
        </CartWrapper>
    );
}
