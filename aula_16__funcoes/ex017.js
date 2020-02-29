 // calcular se o número é par ou ímpar
function parimp(n){ // calcular se o número é par ou ímpar
    if (n%2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

console.log(parimp(11))

// calcular a soma de dois números (ou de 1 só com parâmetros pré definidos)
function soma(n1=0,n2=0){
    return n1 + n2
}

console.log(soma(5,2))

// atribuir função a variável
let v = function(x){
    return x**2
}

console.log(v(5))

// Função fatorial (4! = 4 x 3 x 2 x 1)
function fatorial(n){
    let fat = 1
    for(let c = n;c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(4))

// Função fatorial recursivo (função que chama a si mesma)
function fatorial_r(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n - 1)
    }

}

console.log(fatorial(5))