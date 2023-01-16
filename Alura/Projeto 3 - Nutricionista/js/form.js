var btp = document.querySelector('#adicionar-paciente')
btp.addEventListener('click', function(event){
    event.preventDefault()
    
    var form = document.querySelector('#form-adiciona')

    //Função para capturar informações do paciente do formulário
    var paciente = obtemPacienteDoFormulario(form)

    //Filtragem dos valores adicionados no formulário
    if (paciente.nome.length < 3) {
        var cxnome = document.querySelector('#nome')
        cxnome.style.borderColor='red'
        cxnome.style.borderWidth='3px'
        cxnome.style.fontWeight='bold'
        alert('Nome inválido!')
    } else {
        var nomeV = true
    }

    if (paciente.peso < 1 || peso > 600) {
        var cxpeso = document.querySelector('#peso')
        cxpeso.style.borderColor='red'
        cxpeso.style.borderWidth='3px'
        cxpeso.style.fontWeight='bold'
        alert('Peso inválido!')
    } else {
        var pesoV = true
    }

    if (paciente.altura < 0 || altura > 3) {
        var cxaltura = document.querySelector('#altura')
        cxaltura.style.borderColor='red'
        cxaltura.style.borderWidth='3px'
        cxaltura.style.fontWeight='bold'
        alert('Altura inválida!')
    } else {
        var alturaV = true
    }

    if (paciente.gordura < 0 || gordura > 60) {
        var cxgordura = document.querySelector('#gordura')
        cxgordura.style.borderColor='red'
        cxgordura.style.borderWidth='3px'
        cxgordura.style.fontWeight='bold'
        alert('Gordura inválida!')
    } else {
        var gorduraV = true
    }

    // Criação da TR e das TDs
    if (nomeV == true && pesoV == true && alturaV == true && gorduraV == true) {
        var pacienteTr = document.createElement('tr')
        pacienteTr.className = 'paciente'

        var nomeTd = document.createElement('td')
        nomeTd.className = 'info-nome'

        var pesoTd = document.createElement('td')
        pesoTd.className = 'info-peso'

        var alturaTd = document.createElement('td')
        alturaTd.className = 'info-altura'

        var gorduraTd = document.createElement('td')
        gorduraTd.className = 'info-gordura'

        var imcTd = document.createElement('td')
        imcTd.className = 'info-imc'

        nomeTd.textContent = paciente.nome
        pesoTd.textContent = paciente.peso
        alturaTd.textContent = paciente.altura
        gorduraTd.textContent = paciente.gordura
        imcTd.textContent = calculaImc(peso, altura)

        pacienteTr.appendChild(nomeTd)
        pacienteTr.appendChild(pesoTd)
        pacienteTr.appendChild(alturaTd)
        pacienteTr.appendChild(gorduraTd)
        pacienteTr.appendChild(imcTd)

        var tabela = document.querySelector('#tabela-pacientes')
        tabela.appendChild(pacienteTr)
    }  
})

function obtemPacienteDoFormulario (form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}