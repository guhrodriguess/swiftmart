import { useContext, useEffect } from "react";

import AppContext from "@/contexts/AppContext";

import * as Styles from "./styles";

import ProductItem from "@/components/ProductItem";

import fetchProducts from "@/api/fetchProducts";

import { useSearchParams } from "react-router-dom";

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
    <Styles.Section>
      <Styles.Details>
        <h3>
          Resultados para <span>{query}</span>
        </h3>
      </Styles.Details>
      <Styles.ProductList>
        {products.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </Styles.ProductList>
    </Styles.Section>
  );
}
