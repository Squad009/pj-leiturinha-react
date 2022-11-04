import { Component } from 'react';
import { Link } from 'react-router-dom';



class Authentication extends Component {

    sairLogin =()=> {
        localStorage.setItem("login_feito_com_sucesso",false)
    }

    render() {

        return(
            <div className="text-end">
                            <Link to="/login" type="button" href="/login.html" className="btn btn-outline-light me-2 b" role="button">Entrar</Link>

                            
                         <Link to="/registrar">
                         <button type="button" className="btn btn-warning" data-bs-toggle="modal"
                                data-bs-target="#modalRegistrar">Registrar-se</button>
                         </Link>
                         <button type='button' className='btn btn-primary' onClick={this.sairLogin}  >Sair</button>
                         

            </div>
        );
    }
}

export default Authentication;