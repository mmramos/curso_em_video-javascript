let amigo = {
    nome:'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        this.peso += p
    }
}

console.log(amigo.nome)
console.log(amigo['peso'])
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`)