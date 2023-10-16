//episodes


let episodeArray = []
let pageSize = 6;
let currentPage = 1;

function getEpisode() {
    axios({
        method: 'get',
        url: "https://rickandmortyapi.com/api/episode"
    })
    .then(res => {
        episodeArray = res.data.results; // Update characterArray with the retrieved data
        displayEpisodes(currentPage);
})
    .catch(err => console.error(err)); 
}


function displayEpisodes(page) {
    const cardContainer = document.querySelector("#episodes");
    cardContainer.innerHTML = "";

    const start = (page - 1) * pageSize;
    const end = start + pageSize;


    episodeArray.slice(start, end).forEach(episode => {
    cardContainer.innerHTML += `
            
            <div class="card">
            <img src="./assets/episodes2.jpeg" alt="Arbolian">
            <div class="desc">
                <h2>${episode.name}</h2>
                <p class="light-gray">Episode:</p>
                <p class="para">${episode.episode}</p>
                <p class="light-gray">Air Date:</p>
                <p class="para get">${episode.air_date}</p>
            </div>
            </div>`
        })
    }

    function previousPage() {
        if (currentPage > 1) {
        currentPage--;
        displayEpisodes(currentPage);
    }
    }
    
    function nextPage() {
        const maxPage = Math.ceil(episodeArray.length / pageSize);
        if (currentPage < maxPage) {
          currentPage++;
          displayEpisodes(currentPage);
        }
    }
    
    document.querySelector("#prevButton").addEventListener("click", previousPage, false);
    
    document.querySelector("#nextButton").addEventListener("click", nextPage, false);
    

    getEpisode()
