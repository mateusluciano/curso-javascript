//O n1=0 significa que, caso o parâmetro n1 não seja informado, será considerado 0, e poderia ser n1=2 sem nenhum problema!

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(3,1))
