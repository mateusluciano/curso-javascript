var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamaente ${hora} horas`)
if (hora >5 && hora < 12) {
    console.log(`Bom dia!`)
} else if (hora > 11 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora > 17 && hora < 24 || hora >= 0 && hora < 6) {
    console.log(`Boa noite!`)
} else {
    console.log('Hora inválida!')
}