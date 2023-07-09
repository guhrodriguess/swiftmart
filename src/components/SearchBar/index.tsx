// React Hooks
import React, { useContext, useState } from "react";

// Icons
import { MagnifyingGlass } from "@phosphor-icons/react";

// Styles
import { Form } from "./styles";

// FetchProducts Function
import fetchProducts from "@/api/fetchProducts";

// Context
import AppContext from "@/contexts/AppContext";

// React Router
import { useNavigate } from "react-router-dom";

// SearchBar Component
export default function SearchBar() {
    const [searchValue, setSearchValue] = useState("");

    const navigate = useNavigate();

    const { setProducts } = useContext(AppContext);

    const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const products = await fetchProducts(searchValue);

        setProducts(products);
        setSearchValue("");

        navigate(`/search?q=${searchValue}`, { replace: true });
    };

    return (
        <Form onSubmit={handleSearch}>
            <input
                type="search"
                placeholder="Buscar produto"
                value={searchValue}
                onChange={({ target }) => setSearchValue(target.value)}
                required
            />
            <button type="submit">
                <MagnifyingGlass weight="bold" size={20} />
            </button>
        </Form>
    );
}
