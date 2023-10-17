
function fetchCharacterData() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        const characters = response.data.results;
        displayFavoriteCharacters(characters);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function displayFavoriteCharacters(characters) {

    const cardContainer = document.querySelector("#home-container");
    
    // Filter the characters based on favoriteCharacterIds
    const favoriteCharacters = characters.filter((character) =>
      favoriteCharacterIds.includes(character.id)
    );
  
    // Display the favorite characters on the home page
    favoriteCharacters.forEach((character) => {
        cardContainer.innerHTML = cardContainer.innerHTML + `    
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
  
  // Call the function to fetch and display character data
  fetchCharacterData();
 
  
  
  
  
  
  