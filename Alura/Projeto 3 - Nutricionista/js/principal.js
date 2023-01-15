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

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

function adicionar() {

    var nomepct = document. querySelector('input.nome')
    var nomepct = nomepct.textContent

    var  pacientes = document.createElement()
}