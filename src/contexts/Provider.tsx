import React, { useState, ReactNode } from "react";
import AppContext from "./appContext";

interface ProviderProps {
    children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

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
