import { useEffect } from "react";

import { Link } from "react-router-dom";

import * as Styles from "./styles";

export default function NotFound({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Styles.NotFoundComponent>
            <Styles.Content>
                <p> A página que você está tentando acessar não existe.</p>
                <Link to="/">
                    <button>Voltar ao início</button>
                </Link>
            </Styles.Content>
        </Styles.NotFoundComponent>
    );
}
