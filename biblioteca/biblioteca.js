let biblioteca = {
    nome: "Biblioteca Antônio Furlan",
    endereco: "Rua João Batista Soares, 440",
    livros: [
        {
            titulo: "JavaScript: O Guia Definitivo",
            autor: "David Flanagan, João Eduardo da Nóbrega, Luciana Nedel de Assis",
            ano: 2012
        },
        {
            titulo: "Algoritmos: Lógica para Desenvolvimento de Programação",
            autor: "Jose Augusto Navarro Garcia Manzano, Jayr Figueredo de Oliveira",
            ano: 2009
        },
        {
            titulo: "Capitães da Areia",
            autor: "Jorge Amado",
            ano: 1937
        }
    ]
};
 
function mostrarLivros(){
    const div= document.getElementById("saida");
    div.innerHTML= `<h2> ${biblioteca.nome} </h2> <p><strong>Endereço </strong> ${biblioteca.endereco} </p>
    <h3> Livros Disponiveis: </h3>`;
 
 
 
biblioteca.livros.forEach(function(livros){
    div.innerHTML +=
    `<div class="livro">` +
    `<strong> Titulo: </strong>` + livros.titulo + `<br>` +
    `<strong> Autor: </strong>` + livros.autor + `<br>` +
    `<strong> Ano: </strong>` + livros.ano + `<br>` +
    `</div>` + `<br>`;
});
}
 