// React Hooks
import { useState, useEffect } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Navigation, A11y } from "swiper";

// FetchProducts Function
import fetchProducts from "../../api/fetchProducts";

// ProductItem Component
import ProductItem from "../ProductItem";

// Styles
import { ProductCard } from "../../styles/global";

// Interface
import { Product } from "../../interfaces/interfaces";

// TvSlider Component
export default function TvSlider() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts("tv").then((response) => {
            setProducts(response);
        });
    }, []);

    return (
        <ProductCard>
            <div className="info">
                <h1>Televisão</h1>
                <hr />
            </div>
            <Swiper
                navigation
                grabCursor={true}
                modules={[Pagination, Scrollbar, Navigation, A11y]}
                style={{ width: "100%", height: "max-content" }}
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    941: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
            >
                {products.slice(0, 30).map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductItem data={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ProductCard>
    );
}
