function toggleMode (){
    const html = document.documentElement

 /*   if (html.classList.contains('light')){
        html.classList.remove('light')
    }else {
        html.classList.add('light')
    }
  */  
    html.classList.toggle('light') 

    const img = document.querySelector('#profile img')
    var iconLink = document.querySelector('link[rel="icon"]');


    if (html.classList.contains('light')){
        img.setAttribute("src", "./assets/Avatar.png")
        img.setAttribute("alt", "foto Michael Scott light mode")
        iconLink.setAttribute("href","./assets/sun.svg")
    } else {
        img.setAttribute("src", "./assets/Avatar-dark.png")
        img.setAttribute("alt", "foto de perfil dark mode")
        iconLink.setAttribute("href","https://cdn-icons-png.flaticon.com/512/1229/1229467.png")
    }


}