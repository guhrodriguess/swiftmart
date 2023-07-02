import { useState, ReactNode } from "react";
import AppContext from "./appContext";

export default function Provider({ children }: ReactNode) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    loading,
    setLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
