import { useContext } from "react";
import formatCurrency from "../../utils/formatCurrency";
import { Content, ProductComponent, ImageWrapper } from "./styles";
import AppContext from "../../contexts/appContext";
import { addProductAlert } from "../Toast";
import { Plus } from "@phosphor-icons/react";

interface ProductProps {
    data: string;
    thumbnail?: string;
    title?: string;
    price?: string;
}

export default function ProductItem({ data }: ProductProps) {
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
                <h4>{title.slice(0, 45)}...</h4>
                <span>{formatCurrency(price)}</span>
                <button onClick={handleAddCart}>
                    <Plus weight="bold" size={18} />
                </button>
            </Content>
        </ProductComponent>
    );
}
