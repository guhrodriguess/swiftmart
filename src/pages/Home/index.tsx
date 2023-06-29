import { CaretRight } from "@phosphor-icons/react";
import { HomeComponent, HomeLayout, Content } from "./styles";

import image from "/public/assets/home.png";

export default function Home() {
  return (
    <HomeComponent>
      <HomeLayout>
        {/* Left */}
        <Content>
          <h1>
            A <span>velocidade</span> dos seus desejos em um{" "}
            <span>clique!</span>
          </h1>
          <div className="buttons">
            <button>
              Conheça os produtos <CaretRight weight="bold" size={16} />
            </button>
          </div>
        </Content>

        {/* Right */}
        <div>
          <img src={image} width={300} alt="" />
        </div>
      </HomeLayout>
    </HomeComponent>
  );
}
