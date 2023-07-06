import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Navigation, A11y } from "swiper";
import fetchProducts from "../../api/fetchProducts";
import ProductItem from "../ProductItem";
import { useState, useEffect } from "react";
import { ProductCard } from "../../styles/global";
import { Product } from "../../interfaces/interfaces";

export default function PhoneSlider() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts("celulares").then((response) => {
            setProducts(response);
        });
    }, []);

    return (
        <ProductCard id="product">
            <div className="info">
                <h1>Celulares</h1>
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
