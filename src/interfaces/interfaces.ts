export interface Product {
    id: number;
    thumbnail: string;
    title: string;
    price: string;
}

export interface ContextProps {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    cartItems: Product[];
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
    isCartVisible: boolean;
    setIsCartVisible: (newState: boolean) => void;
}
