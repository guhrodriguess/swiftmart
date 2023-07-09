// React Hooks
import { createContext } from "react";

// Interfaces
import { Product } from "@/interfaces/product";

interface ContextProps {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    cartItems: Product[];
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
    isCartVisible: boolean;
    setIsCartVisible: (newState: boolean) => void;
}

// Initial Value
const initialValue = {
    products: [],
    setProducts: () => undefined,
    cartItems: [],
    setCartItems: () => undefined,
    isCartVisible: false,
    setIsCartVisible: () => undefined,
};

// CreateContext Component
const AppContext = createContext<ContextProps>(initialValue);

export default AppContext;
