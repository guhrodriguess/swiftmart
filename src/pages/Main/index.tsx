import { MouseSimple } from "@phosphor-icons/react";
import { MainComponent, MainLayout, Content } from "./styles";

import SMImage from "/public/assets/home.png";

export default function Main() {
    return (
        <MainComponent>
            <MainLayout>
                <Content>
                    <h1>
                        A <span>velocidade</span> dos seus desejos em um{" "}
                        <span>clique!</span>
                    </h1>
                    <div className="buttons">
                        <a href="#product">
                            <button>Conheça os produtos </button>
                        </a>
                    </div>
                </Content>
                <img src={SMImage} alt="SwiftMart" />
            </MainLayout>
        </MainComponent>
    );
}
