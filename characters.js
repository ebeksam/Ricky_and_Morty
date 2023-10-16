//Character 

let characterArray = []
let pageSize = 6;
let currentPage = 1;

function getCharacter() {
    axios({
        method: 'get',
        url: "https://rickandmortyapi.com/api/character"
    })
    .then(res => {
        characterArray = res.data.results; // Update characterArray with the retrieved data
    displayCharacters(currentPage);
})
    .catch(err => console.error(err)); 
}

function displayCharacters(page) {
    const cardContainer = document.querySelector("#card-container");
    cardContainer.innerHTML = ""; // Clear existing content
        
const start = (page - 1) * pageSize;
  const end = start + pageSize;

  characterArray.slice(start, end).forEach(character => {
    cardContainer.innerHTML += `    
           <div class="card">
            <img src=${character.image} alt="Arbolian">
            <div class="desc">
                <h2>${character.name}</h2>
                <p>${character.status}</p>
                <p class="light-gray">Species:</p>
                <p class="para">${character.species}</p>
                <p class="light-gray">Gender:</p>
                <p class="para get">${character.gender}</p>
            </div>
            </div>`;
        });
    }



function previousPage() {
    if (currentPage > 1) {
    currentPage--;
    displayCharacters(currentPage);
}
}

function nextPage() {
    const maxPage = Math.ceil(characterArray.length / pageSize);
    if (currentPage < maxPage) {
      currentPage++;
      displayCharacters(currentPage);
    }
}

document.querySelector("#prevButton").addEventListener("click", previousPage, false);

document.querySelector("#nextButton").addEventListener("click", nextPage, false);

getCharacter()
