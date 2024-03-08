let num = document.getElementById('txtn')
let list = document.getElementById('flista')
let res = document.getElementById('res')

let valores = []

function confirm() {
    
    if(isNumber(num.value) && !inLista(num.value , valores)) { //Roda 2 funções para verificar se é numero valido!

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        list.appendChild(item)
        valores.push(Number(num.value))
        res.innerHTML = ''

    } else {
        window.alert('Número invalido ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function isNumber(n) { //Verifica se é um numero e retorna True ou False no lugar do (n)!
    
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}
function inLista(n, l) { //Testa de o valor (n) se encontra na lista (l) 
    
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}
function acharmaior(){

    let maior = valores[0] // passa a valer posição 0 da sequencia exe [10] , 20 ,30

    for (let mac= 1; mac < valores.length; mac++) 
    {
        if (valores[mac] > maior) {
            maior = valores[mac] // torna o valor[1] para a var maior = 10 [20] 30
        }
    }
    return maior
}
function acharmenor(){
    let menor = valores[0]
    for(let mec = 1; mec < valores.length; mec++) {
        if (valores[mec] < menor) {
            menor = valores[mec]
        }
    }
    return menor
}
function soma(){
    let somando = valores[0]
    for(let sc = 1; sc < valores.length; sc++) {
        somando += valores[sc]
    }
    return somando
}
function media(){
    if (valores.length == 1) {
        return valores[0]
    } else {
    let media = soma() / valores.length 
        return media 
}
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione números para continuar!')
    } else {

    res.innerHTML = `Temos ao todo ${valores.length} Números cadastrados <br>
    O maior valor é ${acharmaior()} <br>
    O menor valor é ${acharmenor()} <br>
    A soma dos valores é ${soma()} <br> 
    A media dos valores é ${media()}`
    }
}