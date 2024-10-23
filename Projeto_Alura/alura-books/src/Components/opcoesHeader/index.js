import "./estilo.css"

const textoOpcoes = [
    'CATEGORIAS',
    'FAVORITOS',
    'MINHA ESTANTE'
  ]

function OpcoesHeader(){
    return(
        <ul className="opcoes">
            { textoOpcoes.map( (texto) => (
            <li>
                <p className="opcao">
                    {texto}
                </p>
            </li>
        ) ) }
      </ul>
    )
}

export default OpcoesHeader;