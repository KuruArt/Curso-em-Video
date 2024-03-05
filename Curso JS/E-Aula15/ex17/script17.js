/*
    var res = document.getElementById('resposta')
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var ininum = Number(inicio.value)
    var fimnum = Number(fim.value)
    var pasnum = Number(passo.value)
    var resnum = 0
     for(resnum = ininum; resnum < fimnum ; resnum + pasnum ) {
        res.innerHTML = `${resnum}`
     }
*/
    var inicio = 1
    var fim = 10
    var passo = 2
    var res = inicio
     while( res < fim ) {
        res = + passo
        console.lo(`${res}`)
     }
