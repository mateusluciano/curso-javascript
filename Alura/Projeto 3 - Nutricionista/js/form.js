var btp = document.querySelector('#adicionar-paciente')
btp.addEventListener('click', function(event){
    event.preventDefault()
    
    var form = document.querySelector('#form-adiciona')

    // Função para capturar informações do paciente do formulário
    var paciente = obtemPacienteDoFormulario(form)

    // Criação da TR e das TDs
    var pacienteTr = montaTr(paciente)

    // Adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
    
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

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    var nomeTd = document.createElement('td')
    nomeTd.classList.add('info-nome')

    var pesoTd = document.createElement('td')
    pesoTd.classList.add('info-peso')

    var alturaTd = document.createElement('td')
    alturaTd.classList.add('info-altura')

    var gorduraTd = document.createElement('td')
    gorduraTd.classList.add('info-gordura')

    var imcTd = document.createElement('td')
    imcTd.classList.add('info-imc')

    nomeTd.textContent = paciente.nome
    pesoTd.textContent = paciente.peso
    alturaTd.textContent = paciente.altura
    gorduraTd.textContent = paciente.gordura
    imcTd.textContent = paciente.imc

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr

}