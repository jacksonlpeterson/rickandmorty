
document.getElementById("rick").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("morty").value;
  if (value === "")
    return;
    console.log(value);   })
    const url = `https://rickandmortyapi.com/api/character/?name=${"smith"}`;
    fetch(url)
    .then(response=> response.json())
  .then(data => makeCards(data.results));

function makeCards(characters){
    const cardContainer = document.querySelector("#card-group")
    characters.forEach(character => {
       
        cardContainer.innerHTML = 
        cardContainer.innerHTML +
`
    <div class = "card" id="#card-group" style="width: 18rem;">
      <img src=${character.image} class = "card-img-top"</img>
         <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <h6>Status:${character.status}</h6>
            <h6>Species:${character.species}</h6>
            <h6>Gender:${character.gender}</h6>
            <h6>Location:${character.location}</h6>
        </div>   
    </div>   
      <br>`
    })
}



