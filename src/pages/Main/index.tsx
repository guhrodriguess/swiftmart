import * as Styles from "./styles";

import homeImage from "@/assets/home.png";

export default function Main() {
    return (
        <Styles.MainComponent>
            <Styles.MainLayout>
                <Styles.Content>
                    <h1>
                        A <span>velocidade</span> dos seus desejos em um{" "}
                        <span>clique!</span>
                    </h1>
                    <a href="#product">
                        <button>Conheça os produtos </button>
                    </a>
                </Styles.Content>
                <img src={homeImage} alt="SwiftMart" loading="lazy" />
            </Styles.MainLayout>
        </Styles.MainComponent>
    );
}
