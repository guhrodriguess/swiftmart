import { ShoppingCart } from "@phosphor-icons/react";
import { Button } from "./styles";

export default function CartButton() {
  return (
    <Button>
      <ShoppingCart weight="bold" size={28} />
      <span>1</span>
    </Button>
  );
}
