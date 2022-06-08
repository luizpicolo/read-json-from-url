let requisicaoURL = 'https://raw.githubusercontent.com/luizpicolo/json-for-testing/main/dragonball.json';
let requisicao = new XMLHttpRequest();
requisicao.open('get', requisicaoURL);
requisicao.responseType = 'json';
requisicao.send();

requisicao.onload = function() {
  let personagens = requisicao.response;
  const elemento = document.getElementById('list');
  
  personagens.characters.forEach(personagem => {
    let nome = `<div>${personagem.name}</div>`
    elemento.insertAdjacentHTML('afterbegin', nome);
  });
}