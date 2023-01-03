//MODELO PADRÃO
let valores = [5, 8, 2, 9, 3, 1]

for(let pos = 0 ; pos < valores.length ; pos ++){
    console.log(`${valores[pos]}`)
}



//MODELO SIMPLIFICADO
let num = [5, 8, 2, 9, 3, 1]
for(let pos in num) {
    console.log(`O elemento da posição ${pos} é o ${num[pos]}`)
}