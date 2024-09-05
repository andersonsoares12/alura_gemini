import filmes from './dados.js';

const resultadosPesquisa = document.querySelector('.resultados-pesquisa');

function exibirFilmes(filmes) {
  resultadosPesquisa.innerHTML = ''; // Clear previous results

  for (let i = 0; i < filmes.length; i++) {
    const filme = filmes[i];

    // Create a new movie item div
    const itemResultado = document.createElement('div');
    itemResultado.classList.add('item-resultado');

    // Create the HTML elements for each movie
    itemResultado.innerHTML = `
      <h2><a href="${filme.link}" target="_blank">${filme.titulo}</a></h2>
      <h4><p class="descricao-meta">${filme.descricao}</p></h4>
      <h3><a href="${filme.saibaMais}" target="_blank" alt="Saiba mais sobre ${filme.titulo}">Saiba mais</a></h3>
    `;

    // Append the movie item to the results container
    resultadosPesquisa.appendChild(itemResultado);
  }
}

// Initial display of movies
exibirFilmes(filmes);
