function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // fsex[0] para masculino e fsex[1] para feminino 
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 6) {img.setAttribute('src','imagens/boy_1_5.jpg')}
            else if (idade >=6  && idade < 18) {img.setAttribute('src','imagens/boy_6_18.jpg')}
            else if (idade >=18 && idade < 41) {img.setAttribute('src','imagens/boy_19_40.jpg')}
            else if (idade >=41 && idade < 66) {img.setAttribute('src','imagens/boy_41_65.jpg')}
            else if (idade >=66 && idade < 999) {img.setAttribute('src','imagens/boy_66_999.jpg')}
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 6) {img.setAttribute('src','imagens/grl_1_5.jpg')}
            else if (idade >=6  && idade < 18) {img.setAttribute('src','imagens/grl_6_18.jpg')}
            else if (idade >=18 && idade < 41) {img.setAttribute('src','imagens/grl_19_40.jpg')}
            else if (idade >=41 && idade < 66) {img.setAttribute('src','imagens/grl_41_65.jpg')}
            else if (idade >=66 && idade < 999) {img.setAttribute('src','imagens/grl_66_999.jpg')}
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com idade ${idade} anos.<br>`
        res.appendChild(img)
    }
}