import styled from "styled-components";
import { scrollAppear } from "../../styles/global";
import ScrollToTop from "react-scroll-to-top";

export const ScrollComponent = styled(ScrollToTop)`
    animation: ${scrollAppear} 0.5s ease-out forwards;
`;
