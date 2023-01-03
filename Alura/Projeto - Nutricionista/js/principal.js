var titulo = (document.querySelector(".titulo"))
    titulo.innerText = 'Aparecida Nutricionista'

var paciente = document.querySelector('#primeiro-paciente')
var tdimc = paciente.querySelector('.info-imc')
var valido = true

var tdpeso = paciente.querySelector('.info-peso')
var peso = tdpeso.textContent

var tdaltura = paciente.querySelector('.info-altura')
var altura = tdaltura.textContent

if (peso <= 0 || peso > 650) {
    console.log('Valor negativo ou demasiadamente alto')
    tdimc.textContent = 'Peso inválido!'
    //alert('[ERRO] Peso inválido!')
    valido = false
}

if ( altura <= 0 || altura > 3) {
    console.log('Altura negativa ou demasiadamente alta')
    tdimc.textContent = 'Altura inválida'
    //alert('[ERRO] ALtura inválida')
    valido = false
}

if (valido == true){
    var imc = (peso/(altura*altura)).toFixed(2)
    console.log('Peso a Alturas validadas!')
    tdimc.textContent = `${imc}`
}