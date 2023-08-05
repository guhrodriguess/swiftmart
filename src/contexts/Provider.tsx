import { ReactNode, useState, useEffect } from "react";

import AppContext from "./AppContext";

import { Product } from "@/types/product";

type ProviderProps = {
    children: ReactNode;
};

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
