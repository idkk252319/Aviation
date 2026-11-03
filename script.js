let darkmodeHTML = document.getElementById('darkmode')
let bodyHTML = document.getElementById('body')
let navbarHTML = document.querySelector('.nav')
let h3HTML = document.querySelectorAll('h3')
let aHTML = document.querySelectorAll('a')
let h1HTML = document.getElementById('title')
let h4HTML = document.querySelector('h4')
let pHTML = document.querySelector('p')
const audio = new Audio('./assets/seatbelt.mp3')


darkmodeHTML.addEventListener('click', () => {
    aHTML.forEach((atag) => {
        atag.style.color = "white"
    })

    bodyHTML.style.background = "url(./assets/bgd.png)"
    bodyHTML.style.backgroundSize = "contain"
    bodyHTML.style.backgroundRepeat = "no-repeat"
    bodyHTML.style.backgroundPosition = "center center"
    bodyHTML.style.backgroundAttachment = "fixed"
    bodyHTML.style.boxSizing = "border-box"
    bodyHTML.style.backgroundColor = "#020817"

    h3HTML.forEach((h3tag) => {
        h3tag.style.color = "white"
    })

    h1HTML.style.color = "white"

    h4HTML.style.color = "white"

    pHTML.style.color = "white"

    audio.currentTime = 0
    audio.play()


    darkmodeHTML.style.color = "white"



})