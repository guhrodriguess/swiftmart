import { useContext } from "react";

import AppContext from "@/contexts/AppContext";

import * as Styles from "./styles";

import { TrashSimple } from "@phosphor-icons/react";

import formatCurrency from "@/utils/formatCurrency";

export function CartItem({ data }) {
    const { cartItems, setCartItems } = useContext(AppContext);
    const { id, thumbnail, title, price } = data;

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id != id);
        setCartItems(updatedItems);
    };

    return (
        <Styles.CartWrapper>
            <Styles.Image src={thumbnail} alt="Imagem do Produto" />
            <Styles.Content>
                <h3>{title}</h3>
                <span>{formatCurrency(price)}</span>
                <button onClick={handleRemoveItem}>
                    <TrashSimple weight="bold" size={20} />
                </button>
            </Styles.Content>
        </Styles.CartWrapper>
    );
}
