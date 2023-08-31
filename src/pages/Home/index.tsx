import { useEffect } from "react";

import GameSlider from "@/components/GameSlider";
import HardwareSlider from "@/components/HardwareSlider";
import PhoneSlider from "@/components/PhoneSlider";
import TechSlider from "@/components/TechSlider";
import TvSlider from "@/components/TvSlider";

import Main from "@/pages/Main";

export default function Home({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Main />
      <section style={{ margin: "5rem 0" }}>
        <PhoneSlider />
        <TechSlider />
        <HardwareSlider />
        <TvSlider />
        <GameSlider />
      </section>
    </>
  );
}
