import { Component } from 'react';
import InicioTop from './InicioTop';
import '../../css/inicio.css';
import UltimasHistorias from './UltimasHistorias';
import PostagemRecenteProfessor from './PostagemRecenteProfessor';
import Footer from '../../shared/footer/Footer';

class InicioMain extends Component {

    render() {
        return(
            <main>
                <InicioTop />
                <UltimasHistorias />
                <PostagemRecenteProfessor />
                <Footer />
            </main>
        );
    }
}

export default InicioMain;