import CardUltimasLeituras from "./CardUltimasLeituras";
import TituloPerfilAluno from "./TituloPerfilAluno";
import dataUltimasLeituras from "../../shared/mockedData/dataContos";

export default function UltimasLeituras() {
    return(
        <>
            <TituloPerfilAluno titulo="Últimas Leituras" />
            <CardUltimasLeituras data={dataUltimasLeituras} />
        </>
    )
}