import { ShoppingCart } from "@phosphor-icons/react";
import { Button } from "./styles";
import { useContext } from "react";
import AppContext from "../../contexts/appContext";

export default function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  const handleCartBar = () => {
    setIsCartVisible(!isCartVisible);

    if (!isCartVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <Button onClick={handleCartBar}>
      <ShoppingCart weight="bold" size={28} />
      {cartItems.length > 0 && <span>{cartItems.length}</span>}
    </Button>
  );
}
