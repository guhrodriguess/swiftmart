import { MouseSimple } from "@phosphor-icons/react";
import { MainComponent, MainLayout, Content } from "./styles";

import homeImage from "/public/assets/home.png";

export default function Main() {
  return (
    <MainComponent>
      <MainLayout>
        <Content>
          <h1>
            A <span>velocidade</span> dos seus <br /> desejos em um{" "}
            <span>clique!</span>
          </h1>
          <div className="buttons">
            <a href="#product">
              <button>
                Conheça os produtos <MouseSimple weight="bold" size={18} />
              </button>
            </a>
          </div>
        </Content>
        <img src={homeImage} width={400} alt="" />
      </MainLayout>
    </MainComponent>
  );
}
