function contar() {
    var n1 = document.querySelector('input#num1')
    var n1 = Number(n1.value)
    var n2 = document.querySelector('input#txtf')
    var n2 = Number(n2.value)
    var res = document.querySelector('div#res')
    var salto = document.querySelector('input#txtp')
    var salto = Number(salto.value)

    if (n2 != 0 && salto != 0) {
        res.innerHTML = `Números validados! Aguarde um momento!</br>`
        var contador = (n2-n1)/salto
        while (contador != 1) {
            res.innerHTML += `${n1+salto} 👉🏼 `
            n1 = n1 + salto
            var contador = contador - 1
        }
        n1 = n1 + salto
        res.innerHTML += `${n1} 🏁`

    } else if (n2 != 0 && salto == 0) {
        alert ('Ops! Passo 0 está incorreto, considerarei passo como 1!')
        salto ++
        var contador = (n2-n1)/salto
        while (contador != 1) {
            res.innerHTML += `${n1+salto} 👉🏼 `
            n1 = n1 + salto
            var contador = contador - 1
        }
        n1 = n1 + salto
        res.innerHTML += `${n1} 🏁`
        
    } else {
        alert ('Ops... O fim precisa ser diferente de 0!')
    }

    //res.innerHTML += `${n1} e ${n2} e ${salto}`
}