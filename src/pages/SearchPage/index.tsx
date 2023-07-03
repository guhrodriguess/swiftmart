import { useContext, useEffect } from "react";
import AppContext from "../../contexts/appContext";
import { Section, ProductList, Details } from "./style";
import ProductItem from "../../components/ProductItem";
import fetchProducts from "../../api/fetchProducts";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
    const { products, setProducts } = useContext(AppContext);

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    useEffect(() => {
        fetchProducts(query).then((response) => {
            setProducts(response);
        });
    }, [query]);

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
