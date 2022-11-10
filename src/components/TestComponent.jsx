import { Component } from 'react';
import withAuth from './withAuth';

class TestComponent extends Component {

    render() {
        return(
        <>
        <div> <h1>Componente Acessado com sucesso.</h1></div>
        </>
        )
    }
}  

export default  TestComponent;