import { createContext } from "react";
import { ContextProps } from "../interfaces/interfaces";

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
