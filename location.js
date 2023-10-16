//location

let locationArray = []
let pageSize = 6;
let currentPage = 1;

function getLocation() {
    axios({
        method: 'get',
        url: "https://rickandmortyapi.com/api/location",
    })
    .then(res => {
        locationArray = res.data.results; // Update characterArray with the retrieved data
        displayLocation (currentPage);
})
    .catch(err => console.error(err)); 
}


function displayLocation (page) {
    const cardContainer = document.querySelector("#location");
    cardContainer.innerHTML = "";

    const start = (page - 1) * pageSize;
    const end = start + pageSize;


    locationArray.slice(start, end).forEach(location => {
    cardContainer.innerHTML += `
            
            <div class="card">
            <img src="./assets/location2.jpeg" alt="Arbolian">
            <div class="desc">
                <h2>${location.name}</h2>
                <p class="light-gray">Dimension:</p>
                <p class="para">${location.dimension}</p>
                <p class="light-gray">Type:</p>
                <p class="para get">${location.type}</p>
            </div>
            </div>`
        })
    }

    function previousPage() {
        if (currentPage > 1) {
        currentPage--;
        displayLocation (currentPage);
    }
    }
    
    function nextPage() {
        const maxPage = Math.ceil(locationArray.length / pageSize);
        if (currentPage < maxPage) {
          currentPage++;
          displayLocation (currentPage);
        }
    }
    
    document.querySelector("#prevButton").addEventListener("click", previousPage, false);
    
    document.querySelector("#nextButton").addEventListener("click", nextPage, false);

    getLocation()