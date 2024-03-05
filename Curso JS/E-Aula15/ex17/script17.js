function contar() {
  var ini = document.getElementById('txti')
  var fim = document.getElementById('txtf')
  var passo = document.getElementById('txtp')
  var res = document.getElementById('resposta')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
      window.alert('[ERRO] Faltam dados!')
      res.innerHTML = 'Impossivel contar!'
    } else {
      res.innerHTML = '<p> Contando ... </p>'
      var i = Number(ini.value)
      var f = Number(fim.value)
      var p = Number(passo.value)
      var c = i
      if(p <= 0) {
        window.alert(' Passo 0 é invalido! Contado apartir de 1!')
        p = 1
      }
      if(i < f){
        while (c < f) {
          c += p
          res.innerHTML += `  ${c} \u{1F449} `
        }
      } else {
        while (c > f) {
          c -= p
          res.innerHTML += ` ${c}\u{1F449} `
        }
      }
    res.innerHTML += `\u{1F3C1}`
}
}