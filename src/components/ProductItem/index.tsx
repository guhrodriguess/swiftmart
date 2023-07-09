// React Hooks
import { useContext } from "react";

// FormatCurrency Function
import formatCurrency from "@/utils/formatCurrency";

// Styles
import { Content, ProductComponent, ImageWrapper } from "./styles";

// Context
import AppContext from "@/contexts/AppContext";

// Toastify
import { addProductAlert } from "@/components/Toast";

// Icon
import { Plus } from "@phosphor-icons/react";

// ProductItem Component
export default function ProductItem({ data }) {
    const { thumbnail, title, price } = data;

    const { cartItems, setCartItems } = useContext(AppContext);

    const handleAddCart = () => {
        setCartItems([...cartItems, data]);

        addProductAlert();
    };

    return (
        <ProductComponent>
            <ImageWrapper>
                <img
                    src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                    alt="product"
                />
            </ImageWrapper>
            <Content>
                <h4>{title.slice(0, 40)}...</h4>
                <span>{formatCurrency(price)}</span>
                <button onClick={handleAddCart}>
                    <Plus weight="bold" size={18} />
                </button>
            </Content>
        </ProductComponent>
    );
}
