import styled from "styled-components";

const Opcao = styled.li`
    font-size: 16px; /* Define o tamanho da fonte para 16 pixels, aplicando-se ao texto contido no elemento com a classe .opcao. */
    display: flex; /* Define o elemento .opcao como um contêiner flexível, permitindo o alinhamento de seus filhos (por exemplo, ícones ou texto) dentro dele. */
    justify-content: center; /* Centraliza os itens ao longo do eixo principal (horizontal) dentro do contêiner flexível. */
    align-items: center; /* Centraliza os itens ao longo do eixo transversal (vertical) dentro do contêiner flexível. */
    text-align: center; /* Alinha o texto ao centro dentro do elemento. */
    height: 100%; /* Define a altura do elemento .opcao para ocupar 100% da altura do seu contêiner pai. */
    padding: 0 5px; /* Adiciona um preenchimento horizontal de 5 pixels em ambos os lados do elemento .opcao. */
    cursor: pointer; /* Muda o cursor para um ponteiro quando o mouse passa sobre o elemento, indicando que é clicável. */
    min-width: 120px; /* Define uma largura mínima de 120 pixels para o elemento .opcao. */
`
const Opcoes = styled.ul`
    display: flex; /* Define o elemento .opcoes como um contêiner flexível, permitindo que seus itens sejam organizados em uma linha. */
    align-items: center; /* Centraliza as opções ao longo do eixo transversal (vertical) dentro do contêiner flexível. */
`

const textoOpcoes = [
    'CATEGORIAS',
    'FAVORITOS',
    'MINHA ESTANTE'
  ]

function OpcoesHeader(){
    return(
        <Opcoes>
            { textoOpcoes.map( (texto) => (
            <Opcao>
                <p className="opcao">
                    {texto}
                </p>
            </Opcao>
        ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader;