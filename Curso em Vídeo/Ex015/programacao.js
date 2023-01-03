function verificar() {
    var ano = new Date()
    var agora = ano.getFullYear()
    var cliente = document.querySelector('input#txtano')
    var cliente = cliente.value
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (cliente == 0 || cliente > agora) {
        alert('[ERRO] Ano inválido! Favor inserir ano válido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = agora - cliente
        var genero = ''
        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade <= 20) {
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade <=40) {
                img.setAttribute('src', 'adultom.jpg')
            } else if (idade <=60) {
                img.setAttribute('src', 'srm.jpg')
            } else {
                img.setAttribute('src', 'vom.jpg')
            }
        } else if(fsex[1].checked) {
            var genero = 'Mulher'
            if (idade <= 20) {
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade <=40) {
                img.setAttribute('src', 'adultof.jpg')
            } else if (idade <=60) {
                img.setAttribute('src', 'srf.jpg')
            } else {
                img.setAttribute('src', 'vof.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é uma ${genero} de ${idade} anos!`
        res.appendChild(img)
    }
}