var titulo = (document.querySelector(".titulo"))
    titulo.innerText = 'Aparecida Nutricionista'

var pacientes = document.querySelectorAll('.paciente')
console.log(pacientes)

//Cálculo do IMC
for (var c = 0; c<pacientes.length ; c++) {
    var paciente = pacientes[c]
    
    var tdimc = paciente.querySelector('.info-imc')
    var valido = true

    var tdpeso = paciente.querySelector('.info-peso')
    var peso = tdpeso.textContent

    var tdaltura = paciente.querySelector('.info-altura')
    var altura = tdaltura.textContent

    var erro = "orange"

    if (peso <= 0 || peso > 650) {
        console.log(`Valor negativo ou demasiadamente alto. Paciente ${c}`)
        tdimc.textContent = 'Peso inválido!'
        paciente.classList.add('paciente-invalido')
        //alert('[ERRO] Peso inválido!')
        valido = false
    }

    if ( altura <= 0 || altura > 3) {
        console.log(`Altura negativa ou demasiadamente alta. Paciente ${c}`)
        tdimc.textContent = 'Altura inválida'
        paciente.classList.add('paciente-invalido')
        //alert('[ERRO] ALtura inválida')
        valido = false
    }

    if (valido == true){
        var imc = (peso/(altura*altura)).toFixed(2)
        console.log('Peso a Alturas validadas!')
        tdimc.textContent = `${imc}`
    }
}