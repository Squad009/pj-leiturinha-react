import { BASE_URL, CONTOS_EP } from './ApiURI';
import Service from './Service';



class ContoService extends Service {

    persistir(conto) {

        fetch(`${BASE_URL}${CONTOS_EP}`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(conto)
        })
        .then(res => {
            this.isFailure(res);
            this.isNotFound(res, "Ops... não foi possível encontrar o caminho solicitado");
            
            return res.json();
        })
        .catch(error => {
            throw new Error("Houve um erro durante a tentativa de salvar o conto " + error.message);
        })
    }
}

export default ContoService;