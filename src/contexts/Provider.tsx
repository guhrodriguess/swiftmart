import React, { useState, ReactNode } from "react";
import AppContext from "./appContext";

interface ProviderProps {
    children: ReactNode;
    products: string[];
    setProducts: React.Dispatch<React.SetStateAction<string[]>>;
    cartItems: string[];
    setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
    isCartVisible: boolean;
    setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Provider({ children }: ProviderProps) {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const value = {
        products,
        setProducts,
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
        isLoading,
        setIsLoading,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
