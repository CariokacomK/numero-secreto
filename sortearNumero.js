const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()
const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')

function gerarNumeroAleatorio() {
    return parseInt(Math.random(menorValor, maiorValor) * maiorValor + menorValor)
}

console.log(numeroSecreto);

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor