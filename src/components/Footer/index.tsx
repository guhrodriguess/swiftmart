import * as Styles from "./styles";

export default function Footer() {
    return (
        <Styles.FooterComponent>
            <Styles.Content>
                <h1>SwiftMart.</h1>
                <h3>&mdash;</h3>
                <p>
                    Por{" "}
                    <a href="https://github.com/guhrodriguess" target="_blank">
                        Gustavo Rodrigues
                    </a>
                </p>
            </Styles.Content>
        </Styles.FooterComponent>
    );
}
