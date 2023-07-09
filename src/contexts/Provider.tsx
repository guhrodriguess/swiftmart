// React Hooks
import { ReactNode, useState, useEffect } from "react";

// Context
import AppContext from "./AppContext";

// Interface
import { Product } from "@/interfaces/product";

// Type
type ProviderProps = {
    children: ReactNode;
};

// Provider Component
export default function Provider({ children }: ProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<Product[]>(() => {
        const savedProducts = localStorage.getItem("cartItems");
        return savedProducts ? JSON.parse(savedProducts) : [];
    });
    const [isCartVisible, setIsCartVisible] = useState(false);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const value = {
        products,
        setProducts,
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
