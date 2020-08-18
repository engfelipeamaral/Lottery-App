function Executarsorteio() {
    aleatorio = Math.round(Math.random() * 10)
    console.log(aleatorio)
    chute = prompt('Seu numero da sorte(1-10)')

    while (chute > 10 || chute < 0) {
        chute = prompt("Numero invalido, digite novamente (1-10)")
    }


    numerocerto = chute == aleatorio


    if (numerocerto) {
        paragrafoResultado.innerHTML = 'Voce ganhou o sorteio'
    }
    if (!numerocerto) {
        paragrafoResultado.innerHTML = 'Tente novamente'
    }

}