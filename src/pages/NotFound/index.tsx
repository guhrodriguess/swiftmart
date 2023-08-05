import { useEffect } from "react";

import { Link } from "react-router-dom";

import { NotFoundComponent, Content } from "./styles";

export default function NotFound({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <NotFoundComponent>
            <Content>
                <p> A página que você está tentando acessar não existe.</p>
                <Link to="/">
                    <button>Voltar ao início</button>
                </Link>
            </Content>
        </NotFoundComponent>
    );
}
