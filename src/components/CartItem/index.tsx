import { X } from "@phosphor-icons/react";
import { CartWrapper, Content, Image } from "./styles";
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../contexts/appContext";

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
          <X weight="bold" size={20} />
        </button>
      </Content>
    </CartWrapper>
  );
}
