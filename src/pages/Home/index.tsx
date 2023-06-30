import { MouseSimple } from "@phosphor-icons/react";
import { HomeComponent, HomeLayout, Content } from "./styles";

import homeImage from "/public/assets/home.png";

export default function Home() {
  return (
    <HomeComponent>
      <HomeLayout>
        <Content>
          <h1>
            A <span>velocidade</span> dos seus <br /> desejos em um{" "}
            <span>clique!</span>
          </h1>
          <div className="buttons">
            <button>
              Conheça os produtos <MouseSimple weight="bold" size={18} />
            </button>
          </div>
        </Content>
        <div>
          <img src={homeImage} width={300} alt="" />
        </div>
      </HomeLayout>
    </HomeComponent>
  );
}
