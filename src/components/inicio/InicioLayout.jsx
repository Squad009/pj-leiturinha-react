import InicioMain from './InicioMain';
import withAuth from '../withAuth';
 function InicioLayout() {
    
    return(
        <>
            <InicioMain />
        </>
    );
}

export default withAuth(InicioLayout)