var num = document.querySelector('input#fnum')
let lista = document.getElementById('flista')
var res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) < 100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

/* ---------- funcoes matemáticas ---------- */

function max(l) {
    let n = l.length
    let mx = l[0]
    for (let i = 0 ; i < n ; i++){
        if (l[i] > mx) {mx = l[i]}
    }
    return mx
}

function min(l) {
    let n = l.length
    let mn = l[0]
    for (let i = 0 ; i < n ; i++){
        if (l[i] < mn) {mn = l[i]}
    }
    return mn
}

function sum(l) {
    let n = l.length
    let soma = 0
    for (let i = 0 ; i < n ; i++){
        soma += l[i]
    }
    return soma
}

function media(l) {
    let n = l.length
    let media = 0
    for (let i = 0 ; i < n ; i++){
        media += l[i]
    }
    media = media/n
    return media
}

/* ----------------------------------------- */

function adicionar(){

    if (isNumero(num.value) && !inLista(num.value,valores)) {
        // window.alert('tudo ok')
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('valor inválido ou já encontrado na lista')
    }
    num.value = '' // deixar a caixa de texto vazia após a execução
    num.focus() // deixa a caixa de texto selecionada para adicionar novos valores

}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let mxx = max(valores)
        let mnn = min(valores)
        let med = media(valores)
        let som = sum(valores)

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O valor máximo é ${mxx}</p>`
        res.innerHTML += `<p>O valor mínimo é ${mnn}</p>`
        res.innerHTML += `<p>O valor médio é ${med}</p>`
        res.innerHTML += `<p>A soma total é ${som}</p>`
    }
}
