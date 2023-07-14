function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')


    // pegar a tag
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')){
    // se tiver com light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    } else {
    // se tiver sem light mode, mantem a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    
    }
    

//    if(html.classList.contains('light')){
//        html.classList.remove('light')
//    } else {
//        html.classList.add('light')
//    }
}