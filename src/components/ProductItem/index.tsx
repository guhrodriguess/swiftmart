import { useContext } from "react";

import formatCurrency from "@/utils/formatCurrency";

import * as Styles from "./styles";

import AppContext from "@/contexts/AppContext";

import { addProductAlert } from "@/components/Toast";

import { Plus } from "@phosphor-icons/react";

export default function ProductItem({ data }) {
  const { thumbnail, title, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);

    addProductAlert();
  };

  return (
    <Styles.ProductComponent>
      <Styles.ImageWrapper>
        <img
          src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
          alt="product"
          loading="lazy"
        />
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
