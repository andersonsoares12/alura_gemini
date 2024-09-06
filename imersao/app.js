import filmes from './dados.js';

// Seleciona o contêiner dos resultados e o campo de busca
let resultadosPesquisa = document.querySelector('.resultados-pesquisa');
let campoBusca = document.getElementById('campo-busca');
let botaoPesquisar = document.getElementById('botao-pesquisar');

// Função de pesquisa
function pesquisarFilmes() {
    // Obtém o termo de busca digitado pelo usuário
    const termoBusca = campoBusca.value.toLowerCase();

    // Filtra os filmes com base no termo de busca
    const filmesFiltrados = filmes.filter(filme => 
        filme.titulo.toLowerCase().includes(termoBusca)
    );

    // Exibe os filmes que correspondem à pesquisa
    exibirFilmes(filmesFiltrados);
}

// Função para exibir os filmes na tela
function exibirFilmes(filmes) {
    // Limpa os resultados anteriores
    resultadosPesquisa.innerHTML = '';

    // Verifica se há filmes para exibir
    if (filmes.length === 0) {
        resultadosPesquisa.innerHTML = '<p>Nenhum filme encontrado.</p>';
        return;
    }

    // Itera sobre os filmes filtrados e os exibe
    filmes.forEach(filme => {
        const itemResultado = document.createElement('div');
        itemResultado.classList.add('item-resultado');

        // Adiciona o conteúdo HTML para o filme
        itemResultado.innerHTML = `
            <h2><a href="${filme.link}" target="_blank">${filme.titulo}</a></h2>
            <h4><p class="descricao-meta">${filme.descricao}</p></h4>
            <h3><a href="${filme.saibaMais}" target="_blank" alt="Saiba mais sobre ${filme.titulo}">Saiba mais</a></h3>
        `;

        // Adiciona o item ao contêiner de resultados
        resultadosPesquisa.appendChild(itemResultado);
    });
}

// Adiciona o evento de clique ao botão de pesquisa
botaoPesquisar.addEventListener('click', pesquisarFilmes);

// Exibe todos os filmes inicialmente
exibirFilmes(filmes);