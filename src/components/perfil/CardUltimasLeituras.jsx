export default function CardUltimasLeituras({ data }) {

    return (
        <div className='ultimas-leituras'>
            {data.map((item) => {
                return(
                    <div className='card cardLivros' key={item.idConto}>
                        <img src={item.imagem} alt={item.tituloConto} />
                        <h2 className="title_font">{item.tituloConto}</h2>
                        <p> Categoria: {item.categoria}</p>
                        <p> Autor: {item.estudante}</p>
                    </div>
                )
            })}
        </div>
    )
}