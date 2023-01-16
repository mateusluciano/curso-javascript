var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(c=0 ; c < pacientes.length ; c++) {
    var pct = pacientes[c]
    var tdPeso = pacientes[c].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[c].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = pacientes[c].querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso)
    var alturaEhValida = validaAltura(altura)

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = 'Peso Inválido'
        pct.classList.add('paciente-invalido')
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = 'Altura Inválido'
        pct.classList.add('paciente-invalido')
    }

    if (pesoEhValido && alturaEhValida) {
        var imc =  calculaImc(peso, altura)
        tdImc.textContent = imc;
    }
}

function validaPeso (peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false
    }
}

function validaAltura (altura) {
    if (altura > 0 && altura < 3) {
        return true
    } else {
        return false
    }
}

function calculaImc (peso, altura) {
    var imc = 0
    imc = peso/(altura*2)
    return imc.toFixed(2)
}