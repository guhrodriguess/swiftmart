import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import fetchProducts from "../../api/fetchProducts";
import ProductItem from "../ProductItem";
import { useState, useEffect } from "react";
import { ProductCard } from "../../styles/global";

interface ProductsProps {
    product: string;
    id: string;
    data: string;
}

export default function TechSlider() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts("computadores").then((response) => {
            setProducts(response);
        });
    }, []);

    return (
        <ProductCard>
            <div className="info">
                <h1>Computadores</h1>
                <hr />
            </div>
            <Swiper
                navigation
                grabCursor={true}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                style={{ width: "100%", height: "max-content" }}
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
            >
                {products.map((product: ProductsProps) => (
                    <SwiperSlide key={product.id}>
                        <ProductItem data={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ProductCard>
    );
}
