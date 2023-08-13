let valor1 = document.querySelector('#valor1');
let valor2 = document.querySelector('#valor2');
let somar = document.querySelector('#somar');

somar.addEventListener('click', function () {
  let resultado = document.querySelector('#resultado');
  resultado.value = parseInt(valor1.value) + parseInt(valor2.value);
});
