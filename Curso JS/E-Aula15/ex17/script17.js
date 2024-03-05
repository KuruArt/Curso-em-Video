var res = document.getElementById('resposta')
var n1 = document.getElementById('inicio')
var n2 = document.getElementById('fim')
var n3 = document.getElementById('passo')
var incio = Number(n1.value)
var fim = Number(n2.value)
var passo = Number(n3.value)
function confirm() {
    if (inicio < fim) {
      res.innerHTML = `${resnum}`
      resnum ++
    }
}
