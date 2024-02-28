
function carregar() { 
    var img = document.getElementById('img')
    var msg = document.getElementById('msg') 
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora > 6 && hora <= 12) {
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#79B4D9'
    } else if (hora > 12 && hora <= 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F25C05'
        }
        else {
            img.src = 'imagens/noite.png'
            document.body.style.background = '#023059'
        }
    }