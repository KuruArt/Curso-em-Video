function gerar() {
  var numero = document.getElementById('txtn')
  var tab = document.getElementById('tab')
  if (numero.value.length == 0) {
    window.alert('[ERRO] Faltam dados!')
  } else {
    tab.innerHTML=""
    let n = Number(numero.value)
    let c = 1
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} X ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  } 
}