// React Hooks
import { useContext, useEffect } from "react";

// Context
import AppContext from "@/contexts/AppContext";

// Styles
import { Section, ProductList, Details } from "./styles";

// ProductItem Component
import ProductItem from "@/components/ProductItem";

// FetchProducts Function
import fetchProducts from "@/api/fetchProducts";

// React Router
import { useSearchParams } from "react-router-dom";

// Search Page
export default function SearchPage() {
    const { products, setProducts } = useContext(AppContext);

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") ?? "";

    useEffect(() => {
        fetchProducts(query).then((response) => {
            setProducts(response);
        });

        document.title = `SwiftMart — ${query}`;
    });

    return (
        <Section>
            <Details>
                <h3>
                    Resultados para <span>{query}</span>
                </h3>
            </Details>
            <ProductList>
                {products.map((product) => (
                    <ProductItem key={product.id} data={product} />
                ))}
            </ProductList>
        </Section>
    );
}
