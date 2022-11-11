import React from "react";

export default class ComentarioAlunoLinks extends React.Component{
    render(){
        return(
            <aside className="nav_lateral">
                <nav>
                    <div className="container mb-5 mt-5">
                        <h3 className="title_font fs-5 border-dark border-bottom">Postagens dos professores</h3>
                        <ul className="bg-light border border-1 rounded p-3" style="list-style: none;">
                            <li><a href="#" className="link-info" style="text-decoration: none;">Analisando O Pequeno Príncipe</a></li>
                            <li><a href="#" className="link-info" style="text-decoration: none;">Narrativas descomplicadas</a></li>
                            <li><a href="#" className="link-info" style="text-decoration: none;">Buscando o significado</a></li>
                            <li><a href="#" className="link-info" style="text-decoration: none;"></a>Construindo sua narrativa</li>
                            <li><a href="#" className="link-info" style="text-decoration: none;">Entendendo o contexto</a></li>
                        </ul>
                    </div>
                    <div className="container">
                        <h3 className="title_font fs-5 border-dark border-bottom">Contos dos estudantes</h3>
                        <ul className="bg-light border border-1 rounded p-3" style="list-style: none;">
                            <li><a href="#" className="link-info" style="text-decoration: none;">A volta dos que não foram</a></li>
                            <li><a href="#" className="link-info" style="text-decoration: none;">Poeira em alto mar</a></li>
                            <li><a href="#" className="link-info" style="text-decoration: none;">Era uma engraçada casa</a></li>
                            <li><a href="#" className="link-info" style="text-decoration: none;">O dia depois de ontem</a></li>
                            <li><a href="#" className="link-info" style="text-decoration: none;">Os dragões da montanha</a></li>
                        </ul>
                    </div>
                </nav>
            </aside>
        )
    }
}