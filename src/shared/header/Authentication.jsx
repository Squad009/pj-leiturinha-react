import { Component } from 'react';



class Authentication extends Component {

    render() {

        return(
            <div className="text-end">
                            <a type="button" href="/login.html" className="btn btn-outline-light me-2 b" role="button">Entrar</a>
                            <button type="button" className="btn btn-warning" data-bs-toggle="modal"
                                data-bs-target="#modalRegistrar">Registrar-se</button>

            </div>
        );
    }
}

export default Authentication;