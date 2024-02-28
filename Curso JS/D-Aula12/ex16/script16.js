function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) { 
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/Homen5.png')
            }
            else if ( idade < 21 ) {
                //Jovem
                img.setAttribute('src', 'imagens/Homen20.png')
            }
            else if ( idade < 50 ) {
                //adulto
                img.setAttribute('src', 'imagens/Homen40.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/Homen60.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/Mulher5.png')
            }
            else if ( idade < 21 ) {
                //Jovem
                img.setAttribute('src', 'imagens/mulher20.png')
            }
            else if ( idade < 50 ) {
                //adulto
                img.setAttribute('src', 'imagens/mulher40.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/mulher60.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}