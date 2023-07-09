// React Hooks
import { useEffect } from "react";

// Slider Components
import GameSlider from "@/components/GameSlider";
import HardwareSlider from "@/components/HardwareSlider";
import PhoneSlider from "@/components/PhoneSlider";
import TechSlider from "@/components/TechSlider";
import TvSlider from "@/components/TvSlider";

// Main Component
import Main from "@/pages/Main";

// Home Page
export default function Home({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <Main />
            <div style={{ margin: "5rem 0" }}>
                <PhoneSlider />
                <TechSlider />
                <HardwareSlider />
                <TvSlider />
                <GameSlider />
            </div>
        </>
    );
}
