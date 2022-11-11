import React from "react";

export default class ConteudoAlunoTexto extends React.Component{
    render(){
        return(
            <section className="container principal">
            
                    <div className="informacao_conto bg-light p-3 m-5">
                        <div>
                            <h6>Publicado por: <strong>Letícia da E M Luiz Gatti</strong></h6>
                            <p style={{fontSize: ".8rem"}}><em>26 de Setembro</em></p>
                        </div>
                        <div className="btnCurtir">
                            <button className="btn btn-primary">Curtir ♥</button>
                        </div>                
                    </div>

                    <div className="container">
                        <h2 className="title_font text-center">Título do Texto</h2>
                        <figure>
                            <img className="p-3" src="./img/imagem-criativa-info.jpeg" width="100%"
                                alt="Imagem descritiva do conteúdo"/>
                            <figcaption>Figura da imagem descritiva do conteúdo</figcaption>
                        </figure>
                        <article>
                            <p className="fs-5 mt-5">
                                Lorem ipsum dolor sit amet. Et dicta libero hic obcaecati labore et neque tempora a natus
                                laborum.
                                Non voluptatum consectetur est ratione libero et nisi nihil aut voluptatibus amet. Aut
                                consectetur
                                debitis id ipsum odit vel cumque placeat 33 unde sapiente a accusantium ducimus id vero
                                eligendi.
                                Qui tempora fugiat eum dolorem maiores nam commodi voluptatum eos quaerat tenetur est pariatur
                                accusantium est unde provident.
                                Aut dicta quas qui dicta magni et nostrum nesciunt aut asperiores quam ut aspernatur libero sed
                                quis officia. Sit aliquam maxime
                                aut molestias sapiente sit omnis dolore qui alias iusto qui maxime nisi.
                                Rem reiciendis voluptates est nesciunt quod est quidem dolorem et itaque eveniet et ratione
                                laboriosam! Nam nesciunt sunt aut quis nisi qui incidunt enim ut quam libero et consequuntur
                                minima vel internos saepe et placeat iure. Cum neque ducimus eum consectetur asperiores aut
                                consequatur sunt sed quae cumque et quae illum est atque dolore. Qui odio dolorem et omnis
                                excepturi est repudiandae porro qui autem nulla aut fugit nihil.
                            </p>
                        </article>
                    </div>
                    
            </section>
        )
    }
}