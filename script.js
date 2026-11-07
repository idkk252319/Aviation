let darkmodeHTML = document.getElementById('darkmode')
let bodyHTML = document.getElementById('body')
let navbarHTML = document.querySelector('.nav')
let h3HTML = document.querySelectorAll('h3')
let aHTML = document.querySelectorAll('a')
let h1HTML = document.querySelectorAll('h1')
let h4HTML = document.querySelectorAll('h4')
let pHTML = document.querySelectorAll('p')
let introHTML = document.querySelector('.intro')
let funfactsHTML = document.querySelector('.funfacts')
let airbusHTML = document.querySelectorAll('.airbus')
let liHTML = document.querySelectorAll('li')
let labelHTML = document.querySelectorAll('label')

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

    h1HTML.forEach((h1tag) => {
        h1tag.style.color = "white"
    })

    h4HTML.forEach((h4tag) => {
        h4tag.style.color = "white"
    })

    pHTML.forEach((ptag) => {
        ptag.style.color = "white"
    })

    liHTML.forEach((litag) => {
        litag.style.color = "white"
    })

    audio.currentTime = 0
    audio.play()

    labelHTML.forEach((labeltag) => {
        labeltag.style.color = "white"
    })


    introHTML.style.backgroundColor = "rgba(16, 16, 16, 0.3)"
    funfactsHTML.style.backgroundColor = "rgba(16, 16, 16, 0.3)"


    darkmodeHTML.style.color = "white"

    airbusHTML.forEach((bus) => {
        bus.style.color = "white"
    })

    

    

})

function sendMail() {
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        idea : document.getElementById('idea').value,
        airline : document.getElementById('airline').value,

    }

    emailjs.send("service_52zcayt", "template_y31cnlv", parms).then(alert('Great Idea!'))
}

window.addEventListener("load", function () {
    const loader = document.getElementById('preloader');

    loader.style.display = "none"
});