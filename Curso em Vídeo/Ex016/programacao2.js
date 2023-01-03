function contar() {
    var ini = document.querySelector('input#txti')
    var fim = document.querySelector('input#txtf')
    var passo = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível Contar`
        alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML = `Contando: <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            alert('Ops, Passo inválido! Considerando Passo = 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c = c + p) {
                res.innerHTML += `${c} 👉🏼 `

            }
            res.innerHTML += `🏁`

        } else {
            //Contagem regressiva
            for (var c = i; c >= f; c = c - p) {
            res.innerHTML += ` ${c} 👉🏼`

            }
            res.innerHTML += `🏁`
        }
        

    }
}