import { Component } from 'react';



class UltimasHistorias extends Component {

    render() {

        return(
            <section>
                <h2 className="title_font ms-3 mt-5 text_app_secondary">Últimas historinhas adicionadas...</h2>
                <hr className="border-primary border-3 opacity-75"/>
                <a href="vazio" className="text-link" style={{float: "right", marginRight: "2rem"}}>Mais...</a>
                <div className="album py-5 bg-light">
                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225"
                                        src="/img/alicenopaisdasmaravilhas.jpg" alt="Imagem Alice no país das maravilhas"
                                        preserveAspectRatio="xMidYMid slice" focusable="false">
                                    </img>

                                <div className="card-body">
                                    <h5 className="card-title">Alice em uma nova aventura</h5>
                                    <p className="card-text">Uma história fantástica com um final incrível.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className="btn button_app_secondary">Ver</button>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225"
                                    src="/img/diariodeumbanana.jpg" alt="Desenho de um menino"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                </img>

                                <div className="card-body">
                                    <h5 className="card-title">O atrapalhado</h5>
                                    <p className="card-text">Uma história fantástica com um final incrível.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className="btn button_app_secondary">Ver</button>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225"
                                    src="/img/daminhajanela.jpg" alt="Capa de livro com desenho de menino na janela"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                </img>

                                <div className="card-body">
                                    <h5 className="card-title">Viagens da mente</h5>
                                    <p className="card-text">Uma história fantástica com um final incrível.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className="btn button_app_secondary">Ver</button>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UltimasHistorias;