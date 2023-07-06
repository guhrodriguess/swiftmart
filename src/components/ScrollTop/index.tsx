// ScrollToTop
import { CaretUp } from "@phosphor-icons/react";
import ScrollToTop from "react-scroll-to-top";

// Scroll Top
export default function ScrollTop() {
    return (
        <ScrollToTop
            smooth
            top="20"
            component={<CaretUp weight="bold" color="#fff" size={26} />}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "none",
                background: "#694EB3",
                zIndex: "50",
                borderRadius: "15px",
            }}
            width="20px"
            height="20px"
        />
    );
}
