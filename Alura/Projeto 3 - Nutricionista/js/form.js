var btp = document.querySelector('#adicionar-paciente')
btp.addEventListener('click', function(event){
    event.preventDefault()
    
    var form = document.querySelector('#form-adiciona')

    // Função para capturar informações do paciente do formulário
    var paciente = obtemPacienteDoFormulario(form)

    // Criação da TR e das TDs
    var pacienteTr = montaTr(paciente)

    // Validando cliente
    var erro = validaPaciente(paciente)
    if (erro.length > 0) {
        var mensagemErro = document.querySelector('#msg-erro')
        mensagemErro.textContent = erro
        return
    }

    // Adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
    
    //Limpando os campos do Form
    form.reset()
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

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr

}

function montaTd(dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente (paciente) {
    if (validaPeso(paciente.peso)) {
        return ''
    } else {
        return 'Peso inválido'
    }
}