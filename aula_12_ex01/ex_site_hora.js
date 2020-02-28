function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var msg = window.document.getElementById("msg")
    var fundo = window.document.getElementById("fundo")
    var img = window.document.getElementById("imagem")

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora < 12) {
        img.src = 'https://images.ctfassets.net/ryplwhabvmmk/1m1jkj9MmUOgIk6Vx1KgNj/a46a749bd1884d210defcb28b04a956f/Heliod-God-of-the-Sun.jpg'
        document.body.style.background = "Gold"
    } else if (hora < 18) {
        img.src = 'https://images.ctfassets.net/ryplwhabvmmk/xrlrsg6XCcmjMsmLwjlNn/07d15add79ba7066ec490fd0412a72dd/Purphoros-God-of-the-Forge.jpg'
        document.body.style.background = "maroon"
    } else {
        img.src = 'https://images.ctfassets.net/ryplwhabvmmk/1drujTiLFtdrQcZ7MPu03S/6c2fb43f39eee357ab6b6d5a1e66c20c/Erebos-God-of-the-Dead.jpg'
        fundo.style.background = "rgb(28, 0, 65)"
    }
}
