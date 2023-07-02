import GameSlider from "../../components/GameSlider";
import HardwareSlider from "../../components/HardwareSlider";
import PhoneSlider from "../../components/PhoneSlider";
import TechSlider from "../../components/TechSlider";
import TvSlider from "../../components/TvSlider";
import Main from "../Main";

export default function Home() {
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
