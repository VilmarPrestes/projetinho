let equacao = '';
let resultado = document.querySelector('#resultado');

function calcular(termo) {
  if (termo == '=') equacao = eval(equacao);
  else {
    equacao += termo;
    resultado.innerHTML = equacao;
  }
}
