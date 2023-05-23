const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrar = categoria == 'disponivel' ? livros.filter(livros => livros.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)  
    exibirOsLivrosNaTela(livrosFiltrar)
}
