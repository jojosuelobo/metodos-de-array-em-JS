const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrar = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrar)
}
