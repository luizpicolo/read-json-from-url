let requisicaoURL = 'https://raw.githubusercontent.com/luizpicolo/json-for-testing/main/dragonball.json';
let requisicao = new XMLHttpRequest();
requisicao.open('get', requisicaoURL);
requisicao.responseType = 'json';
requisicao.send();

requisicao.onload = function() {
  let personagens = requisicao.response;
  const elemento = document.getElementById('list');
  
  let titulo = `<h1>Personagens</h1>`;
  elemento.insertAdjacentHTML('afterbegin', titulo);

  personagens.characters.forEach(personagem => {
    let nome = `<div class="personagem">${personagem.name}</div>`;
    elemento.insertAdjacentHTML('beforeend', nome);
  });
}