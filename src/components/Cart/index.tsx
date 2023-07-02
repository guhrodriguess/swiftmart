import { useContext } from "react";
import { CartItem } from "../CartItem";
import { CartWrapper, CartList, CartResume } from "./styles";
import AppContext from "../../contexts/appContext";
import formatCurrency from "../../utils/formatCurrency";

export default function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <CartWrapper
      style={
        isCartVisible
          ? { transform: "translate(0, 0)" }
          : { transform: "translate(120%, 0)" }
      }
    >
      <CartList>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </CartList>
      <CartResume>{formatCurrency(totalPrice)}</CartResume>
    </CartWrapper>
  );
}
