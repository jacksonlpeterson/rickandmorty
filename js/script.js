function searchRick(userinput){
   const url = `https://rickandmortyapi.com/api/character/?name=${userinput}`; 
    fetch(url)
    .then(response=> response.json())
    .then(data => makeCards(data.results));
  function makeCards(characters){
    const cardContainer = document.querySelector("#card-group");
    FileList.innerHTML="";
    characters.forEach(character => {
       
        cardContainer.innerHTML = 
        cardContainer.innerHTML +
`
    <div class = "card" id="#card-group" style="width: 18rem;">
      <img src=${character.image} class = "card-img-top"</img>
         <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <div>Status:${character.status}</div>
            <div>Species:${character.species}</div>
            <div>Gender:${character.gender}</div>
        </div>   
    </div>   
      <br>`
    })
}

   }
   window.onload = () => {
    const searchFieldElement = document.getElementById("rick");
    searchFieldElement.onkeyup = (event)=> {
      searchRick(searchFieldElement.value);
    }  
     }
      



