var btp = document.querySelector('#adicionar-paciente')
btp.addEventListener('click', function(event){
    event.preventDefault()
    
    var form = document.querySelector('#form-adiciona')

    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

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

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura
    imcTd.textContent = 0

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
})