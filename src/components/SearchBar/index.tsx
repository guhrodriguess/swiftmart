import React, { useContext, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Form, InputWrapper } from "./styles";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../contexts/appContext";
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
        <Form onSubmit={handleSearch}>
            <InputWrapper>
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
            </InputWrapper>
        </Form>
    );
}
