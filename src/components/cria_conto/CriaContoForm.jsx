import { Component } from 'react';

class CriaContoForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            inputImage: "",
            srcImage: ""
        }
    }
    render() {
        return(
            <section>
            <div className="containter-fluid p-3 mb-5" style={{backgroundImage: "url('../img/fundo-criativo-criar-conto.webp')"}}>
                <div className="fundo_criativo">
                    <form className="container p-2" method="post" action="mailto:bilbos_cg@hotmail.com"
                        encType="text/plain">
                        <div className="selecao_imagem">
                            <div>
                                <img className="visualizacao_imagem" alt="Imagem do usuário" src={this.state.srcImage}/>
                            </div>
                            <div>
                                <label htmlFor="formFileLg" className="form-label">Escolha uma imagem</label>
                                <input className="form-control form-control-lg mb-3" id="formFileLg" type="file"  onChange={e => this.mostraImagem(e)} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="titulo_conto" className="form-label rotulo_campo w-100 text-center my-4">Título do conto</label>
                            <input type="text" className="form-control form-control-lg"
                                id="titulo_conto" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label rotulo_campo w-100 text-center my-4">Escreva sua
                                história
                                aqui</label>
                            <textarea className="form-control form-control-lg "
                                id="exampleFormControlTextarea1" rows="10"></textarea>
                        </div>
                        <select className="form-select form-select-lg mb-3 "
                            aria-label=".form-select-lg example">
                            <option defaultValue={"Escolha a categoria"} >Escolha a categoria</option>
                            <option  value="1">Fantasia</option>
                            <option value="2">Aventura</option>
                            <option value="3">Ação</option>
                        </select>
                        <input className="button_app_primary button_salvar" type="submit" value="Publicar história"
                            style={{float: "right"}} />
                    </form>
                </div>
            </div>
        </section>
        );
    }

    mostraImagem(e) {
        
        this.image = e.target.files.item(0);
        this.setState({ inputImage: this.image.slice()});

        this.fr = new FileReader();
        this.fr.readAsDataURL(this.image);

        this.fr.onload = e => this.setState({ srcImage: e.target.result});


    }

}


export default CriaContoForm;