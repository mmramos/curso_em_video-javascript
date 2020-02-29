lista = [1,2,3,4,5,6,8,9,4,3,2,0,1]

function max(l) {
    n = l.length
    var mx = l[0]
    for (var i = 0 ; i < n ; i++){
        // console.log(i,i,i)
        if (l[i] > mx) {mx = l[i]}
    }
    console.log(mx)
    return mx
}

function min(l) {
    n = l.length
    let mn = l[0]
    for (let i = 0 ; i < n ; i++){
        if (l[i] < mn) {mn = l[i]}
    }
    console.log(mn)
    return mn
}

function media(l) {
    let n = l.length
    let media = 0
    for (let i = 0 ; i < n ; i++){
        media += l[i]
    }
    media = media/n
    console.log(media)
    return media
}

max(lista)
min(lista)
media(lista)