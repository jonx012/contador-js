function contar(){
    var inicio = document.querySelector("#numInicio")
    var fim = document.querySelector("#numFim")
    var passo = document.querySelector("#numPasso")
    var cont = 0
    var res = document.querySelector("#res")
    var inicioN = Number(inicio.value)
    var fimN = Number(fim.value)
    var passoN = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[Error] Dado(s) inválido")
        res.innerHTML = "<p><strong>Não é possível fazer a contagem!</strong></p>"
    } else {
        res.innerHTML = "Contando:<br>"
        
        if (passoN <= 0) {
            alert("[Error] Dado(s) inválido")
            res.innerHTML = "<p><strong>Não é possível fazer a contagem!</strong></p>"
            exit()
        } 
        
        if (inicioN < fimN) {
            for (cont = inicioN; cont <= fimN; cont += passoN) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        } else {
            for (cont = inicioN; cont >= fimN; cont -= passoN) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        }

        res.innerHTML += "\u{1F3C1}"
    }
}