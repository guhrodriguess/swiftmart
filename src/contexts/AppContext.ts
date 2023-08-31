import { createContext } from "react";

import { Product } from "@/types/product";

interface ContextProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  isCartVisible: boolean;
  setIsCartVisible: (newState: boolean) => void;
}

const initialValue = {
  products: [],
  setProducts: () => undefined,
  cartItems: [],
  setCartItems: () => undefined,
  isCartVisible: false,
  setIsCartVisible: () => undefined,
};

const AppContext = createContext<ContextProps>(initialValue);

export default AppContext;
