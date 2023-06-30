import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const PhoneComponent = styled.section`
  padding: 0 0.5rem;

  .swiper-button-prev {
    color: ${(props) => props.theme.primary};
  }

  .swiper-button-next {
    color: ${(props) => props.theme.primary};
  }

  hr {
    width: 5%;
    height: 5px;
    border: none;
    background: ${(props) => props.theme.primary};
    border-radius: 15px;
  }
`;
