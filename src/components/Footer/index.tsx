import { FooterComponent, Content } from "./styles";

export default function Footer() {
  return (
    <FooterComponent>
      <Content>
        <h1>
          Swift<span>Mart.</span>
        </h1>
        <p>
          Feito com 🤍 por{" "}
          <a href="https://github.com/guhrodriguess" target="_blank">
            Gustavo Rodrigues
          </a>
        </p>
      </Content>
    </FooterComponent>
  );
}
