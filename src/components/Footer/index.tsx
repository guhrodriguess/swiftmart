// Styles
import { FooterComponent, Content } from "./styles";

// Footer Component
export default function Footer() {
    return (
        <FooterComponent>
            <Content>
                <h1>SwiftMart.</h1>
                <h3>&mdash;</h3>
                <p>
                    Por{" "}
                    <a href="https://github.com/guhrodriguess" target="_blank">
                        Gustavo Rodrigues
                    </a>
                </p>
            </Content>
        </FooterComponent>
    );
}
