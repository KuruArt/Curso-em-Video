let num = [2, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log (`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let val = 8
let pos = num.indexOf(val)
console.log(`Procurando valor ${val} `)
if (pos == -1){
    console.log('Não foi possivel achar esse valor!')
} else {
    console.log(`O valor ${val} está na posição ${pos}`)
}