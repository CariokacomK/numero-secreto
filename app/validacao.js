function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute
    const body = document.querySelector('body')    

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor Inválido </div>';
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div> Valor Inválido: o número deve estar entre ${menorValor} e ${maiorValor} </div>
        `;
        return
    }

    if (chute === 'Game Over') {
        document.body.innerHTML =
        `
            <h2>Você Perdeu!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        body.classList.add('game-over')
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = 
        `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>Você disse:</div>
        <span class="box">20</span>
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }else if(numero < numeroSecreto){
        elementoChute.innerHTML += `
        <div>Você disse:</div>
        <span class="box">20</span>
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}


function chuteForInvalido(numero) {
   return Number.isNan(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})