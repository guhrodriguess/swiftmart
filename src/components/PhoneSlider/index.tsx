import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import fetchProducts from "../../api/fetchProducts";
import ProductItem from "../ProductItem";
import { useState, useEffect } from "react";
import { ProductCard } from "../../styles/global";

export default function PhoneSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts("celular").then((response) => {
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
        {products.map((product) => (
          <SwiperSlide>
            <ProductItem key={product.id} data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ProductCard>
  );
}
