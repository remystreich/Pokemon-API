// function getPokemons(name) {
//     let pokemons = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(data => {
//        data.json().then(res =>{
//         console.log(res.name);
//        })
//     })
// };


// async function getPokemons(name) {
//     let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     pokemons = await pokemons.json();
//     console.log(pokemons);
// }


let input = document.getElementById("pokeName");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    let pokeName = input.value.toLowerCase();
    getPokemons(pokeName);
  }
});

async function getPokemons(name) {
    let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    pokemons = await pokemons.json();
    
    let parent = document.getElementById("displayPoke");

    let cardContainer = document.createElement('div')
    cardContainer.classList.add("col-3","mb-2")
    parent.appendChild(cardContainer)

    let container = document.createElement('div')
    container.classList.add('card','text-center','bg-primary-subtle','border','border-warning','border-5')
    cardContainer.appendChild(container)

    let pokePicture = document.createElement('img')
    pokePicture.classList.add('card-img-top','img-responsive')
    pokePicture.src = pokemons.sprites.front_default
    container.appendChild(pokePicture)

    let cardBody = document.createElement('div');
    container.appendChild(cardBody)

    let pokeName = document.createElement('h4')
    pokeName.classList.add('card-title','text-capitalize')
    pokeName.innerHTML = pokemons.name
    cardBody.appendChild(pokeName)

    let abilities = document.createElement('p')
    abilities.classList.add('class-text','text-capitalize')
    abilities.innerHTML = pokemons.types[0].type.name;
    cardBody.appendChild(abilities)

}
