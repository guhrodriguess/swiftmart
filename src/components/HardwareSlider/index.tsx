import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Navigation, A11y } from "swiper";
import fetchProducts from "../../api/fetchProducts";
import ProductItem from "../ProductItem";
import { useState, useEffect } from "react";
import { ProductCard } from "../../styles/global";

export default function HardwareSlider() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts("hardware").then((response) => {
            setProducts(response);
        });
    }, []);

    return (
        <ProductCard>
            <div className="info">
                <h1>Hardware</h1>
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
                {products.slice(0, 30).map((product) => (
                    <SwiperSlide>
                        <ProductItem key={product.id} data={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ProductCard>
    );
}
