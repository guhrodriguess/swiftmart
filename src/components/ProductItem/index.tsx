import { useContext } from "react";
import formatCurrency from "../../utils/formatCurrency";
import { Content, ProductComponent } from "./styles";
import AppContext from "../../contexts/appContext";
import { addProductAlert } from "../Toast";

interface ProductProps {
  data: string;
  thumbnail: string;
  title: string;
  price: string;
}

export default function ProductItem({ data }: ProductProps) {
  const { thumbnail, title, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);

    localStorage.setItem("products", setCartItems);

    addProductAlert();
  };

  return (
    <ProductComponent>
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" />
      <Content>
        <h4>{title.slice(0, 50)}...</h4>
        <span>{formatCurrency(price)}</span>
        <button onClick={handleAddCart}>Adicionar ao carrinho</button>
      </Content>
    </ProductComponent>
  );
}
