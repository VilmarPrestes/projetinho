let equacao = '';
let resultado = document.querySelector('#resultado');

function calcular(termo) {
  if (termo == '=') equacao = eval(equacao);
  else equacao += termo;

  resultado.value = equacao;
}

function limpar() {
  equacao = '';
  resultado.value = equacao;
}

function apagar() {
  equacao = equacao.slice(0, -1);
  resultado.value = equacao;
}
