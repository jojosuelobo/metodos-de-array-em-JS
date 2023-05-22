// let livros = []
// const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

// getBuscarLivrosDaApi()

// async function getBuscarLivrosDaApi(){
//     const res = await fetch(endpointDaApi)
//     livros = await res.json()
//     let livrosComDesconto = aplicarDesconto(livros)
//     ExibirLivrosNaTela(livrosComDesconto)
// }

let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}