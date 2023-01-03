function carregar() {
    var msg = document.querySelector('div#msg')
    var imgt = document.querySelector('img#foto') 
    var horas = new Date()
    var agora = horas.getHours()
    msg.innerHTML = `Agora são ${agora} horas!`
    var agora = 19
    if (agora > 5 && agora <12) {
        //BOM DIA
        imgt.src = '01.jpg'
        document.body.style.background = '#D1A86B'
    } else if (agora > 11 && agora < 18) {
        //BOA TARDE
        imgt.src = '02.jpg'
        document.body.style.background = '#96623D'
    } else {
        //BOA NOITE
        imgt.src='03.jpg'
        document.body.style.background = '#1B2856'
    }
}