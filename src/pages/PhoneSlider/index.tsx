import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import fetchProducts from "../../api/fetchProducts";
import ProductItem from "../../components/ProductItem";
import { PhoneComponent } from "./styles";
import { useState, useEffect } from "react";

export default function PhoneSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts("celular").then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <PhoneComponent>
      <h1>Celulares</h1>
      <hr />
      <Swiper
        navigation
        grabCursor={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={4}
        style={{ width: "100%", height: "max-content" }}
      >
        {products.map((product) => (
          <SwiperSlide>
            <ProductItem key={product.id} data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </PhoneComponent>
  );
}
