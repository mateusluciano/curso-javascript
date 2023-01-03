let ficha = []
function adicionar() {
    var num = document.querySelector('input#txtn1')
    var lista = document.querySelector('select#num')
    var num = Number(num.value)
    

    if (num < 1 || num > 100 || num.length == 0) {
        // Caso o número seja menor que 1
        // Caso o número seja maior que 100
        // Caso o usuário não tenha digitado nenhum número
        alert('[ERRO] Número inválido!')

    } else if (ficha.indexOf(num) != -1) {
        // Caso o número já tenha sido digitado anteriormente
        alert('[ERRO] Número já adicionado!')
        num.value = ''
        num.focus()

    } else {
        // Adicionar número na array ficha
        var elemento = document.createElement('option')
        var res = document.querySelector('div#res')
        res.innerHTML = ''
        elemento.text = ` Valor ${num} adicionado`
        lista.value = `${ficha.indexOf(num)}`
        lista.appendChild(elemento)
        ficha.push(num)
        num.value = ''
        num.focus()
    }    
        
}
function analisar() {
    if (ficha.length >= 2) {
        var frases = document.querySelector('div#res')
        frases.innerHTML = ''
        var conjunto = ficha.length
        ficha.sort(function(a, b) {return a-b})
        var soma = 0
        for (var c = 0 ; c < conjunto ; c++){
            if (c == 0) {
                soma += ficha[0]
            } else if (c < conjunto) {
                soma += ficha[c]
            } else {
                break
            }
        
        }

        frases.innerHTML = `</br>Ao todo, temos ${conjunto} números cadastrados.`
        frases.innerHTML += `</br>O maior valor informado foi ${ficha[conjunto-1]}!`
        frases.innerHTML += `</br>O menor valor informado foi ${ficha[0]}!`
        frases.innerHTML += `</br>Somando todos os valores, temos ${soma}!`
        frases.innerHTML += `</br>A média dos valores digitados é ${soma/conjunto}!`

    
    } else {
        window.alert('Adicione o mínimo de dois valores!')
    }
    
}