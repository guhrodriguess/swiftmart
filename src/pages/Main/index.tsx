// Styles
import { MainComponent, MainLayout, Content } from "./styles";

// Image
import homeImage from "/public/assets/home.png";

export default function Main() {
    return (
        <MainComponent>
            <MainLayout>
                <Content>
                    <h1>
                        A <span>velocidade</span> dos seus desejos em um{" "}
                        <span>clique!</span>
                    </h1>
                    <a href="#product">
                        <button>Conheça os produtos </button>
                    </a>
                </Content>
                <img src={homeImage} alt="SwiftMart" />
            </MainLayout>
        </MainComponent>
    );
}
