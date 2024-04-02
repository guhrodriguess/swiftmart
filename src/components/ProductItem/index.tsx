import { useContext } from "react";

import formatCurrency from "@/utils/formatCurrency";

import * as Styles from "./styles";

import AppContext from "@/contexts/AppContext";

import { Plus } from "@phosphor-icons/react";
import { toast } from "sonner";

export default function ProductItem({ data }) {
  const { thumbnail, title, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);

    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <Styles.ProductComponent>
      <Styles.ImageWrapper>
        <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" />
      </Styles.ImageWrapper>
      <Styles.Content>
        <h4>{title.slice(0, 40)}...</h4>
        <span>{formatCurrency(price)}</span>
        <button onClick={handleAddCart}>
          <Plus weight="bold" size={18} />
        </button>
      </Styles.Content>
    </Styles.ProductComponent>
  );
}
