function gerar() {
    var n1 = document.querySelector('input#txtn1')
    var n1 = Number(n1.value)
    var res = document.querySelector('div#res')
    var tabuada = 1

    while (tabuada <= 10) {
        var resultado = n1 * tabuada
        res.innerHTML += `</br>${n1} X ${tabuada} = ${resultado}`
        tabuada ++
    }


    //res.innerHTML = `Teste ${n1}`
}