import { Component } from 'react';
import Conto from '../../models/Conto';
import ContoService from '../../services/ContoService';

class CriaContoForm extends Component {
    
    constructor(props) {
        super(props);

        this.service = new ContoService();
        this.state = {
            inputImage: "",
            srcImage: "",
            inputTitulo: "",
            inputConteudo: "",
            inputCategoria: ""
        }
    }
    render() {
        return(
            <section>
            <div className="containter-fluid p-3 mb-5" style={{backgroundImage: "url('../img/fundo-criativo-criar-conto.webp')"}}>
                <div className="fundo_criativo">
                    <form className="container p-2"
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
                            <input type="text" className="form-control form-control-lg" value={this.state.inputTitulo} onChange={(e) => this.setState({inputTitulo: e.target.value})}
                                id="titulo_conto" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label rotulo_campo w-100 text-center my-4">Escreva sua
                                história
                                aqui</label>
                            <textarea className="form-control form-control-lg " value={this.state.inputConteudo} onChange={(e) => this.setState({inputConteudo: e.target.value})}
                                id="exampleFormControlTextarea1" rows="10"></textarea>
                        </div>
                        <select className="form-select form-select-lg mb-3 "  onChange={(e) => this.setState({inputCategoria: e.target.value.toUpperCase()})}
                            aria-label=".form-select-lg example">
                            <option defaultValue={"Escolha a categoria"} >Escolha a categoria</option>
                            <option  value="Fantasia">Fantasia</option>
                            <option value="Aventura">Aventura</option>
                            <option value="Ação">Ação</option>
                        </select>
                        <input className="button_app_primary button_salvar" value="Publicar história" onClick={e => this.salvaConteudo(e)}
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

        this.fr.onload = e => {
            
            this.setState({ srcImage: e.target.result});
        }

    }

    salvaConteudo(e) {
        this.conto = new Conto(this.state.inputTitulo, this.state.inputConteudo, this.state.inputCategoria, this.state.inputImage);
        console.log("conto", this.conto);
        this.service.persistir(this.conto);
        if(this.camposSaoValidos()) {
        } else {
            alert("Todos os campos devem ser preenchidos");
        }
    }

    camposSaoValidos() {
        return this.state.inputTitulo.length > 0 && this.state.inputConteudo.length > 0 &&
        this.state.inputCategoria.length > 0 && this.state.inputImage.length > 0;
    }

}


export default CriaContoForm;