const nav = document.querySelector("#navigation");
const navToggle = document.querySelector("#mobile-nav-toggle")


navToggle.addEventListener("click", () => {
const visibility = nav.getAttribute("data-visible")


if(visibility === "false"){
nav.setAttribute("data-visible", true)
navToggle.setAttribute("aria-expanded", true)
}else {
nav.setAttribute("data-visible", false)
navToggle.setAttribute("aria-expanded", false)
}
})

var year = new Date().getFullYear()
document.getElementById("currentYear").innerHTML = year


fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => makeCards(data.results))

function makeCards(characterArray){
    cardContainer = document.querySelector("#card-container")
    console.log(characterArray)
    characterArray.forEach(character => {
        cardContainer.innerHTML = cardContainer.innerHTML + `
        
        <div class="card">
        <img src=${character.image} alt="Arbolian">
        <div class="desc">
            <h2>${character.name}</h2>
            <p>${character.status} - ${character.species}</p>
            <p class="light-gray">Last known location:</p>
            <p class="para">St. Gloopy Noops Hospital</p>
            <p class="light-gray">First seen in:</p>
            <p class="para get">Get Schwifty</p>
        </div>
        </div>`
    })
}
