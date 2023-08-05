import React, { useContext, useState } from "react";

import { MagnifyingGlass } from "@phosphor-icons/react";

import * as Styles from "./styles";

import fetchProducts from "@/api/fetchProducts";

import AppContext from "@/contexts/AppContext";

import { useNavigate } from "react-router-dom";

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
        <Styles.Form onSubmit={handleSearch}>
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
        </Styles.Form>
    );
}
