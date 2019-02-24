document.addEventListener('DOMContentLoaded', () => {

const pokemonContainer = document.querySelector('#pokemon-container')
const pokemonSearchForm = document.querySelector('#pokemon-search-form')
const pokemonSearchInput = document.querySelector('#pokemon-search-input')

const getAllPokemon = () => {
  fetch('http://localhost:3000/pokemon')
  .then(res => res.json())
  .then(pokemonArray => displayAllPokemon(pokemonArray))
}

// doTheThing = async () => {
//   return await fetch ('http://localhost:3000/pokemon')
//   .then (res => res.json())
// }

const displayAllPokemon = (pokemonArray) => {
  pokemonArray.forEach(displayOnePokemon)
}
const displayOnePokemon = (onePokemon) => {
  const name = onePokemon.name
  const id = onePokemon.id
  const abilities = onePokemon.abilities
  const moves = onePokemon.moves
  const stats = onePokemon.stats // array of stats
  const types = onePokemon.types // array of types
  const weight = onePokemon.weight
  const height = onePokemon.height
  const imgFront = onePokemon.sprites.front
  const imgBack = onePokemon.sprites.back

  // const formatStats = () => {
  //   stats.forEach(produceStatsString)
  // }
  //
  // const produceStatsString = (stat) => {
  //   const div = document.createElement('div')
  //   const value = stat.value
  //   const name = stat.name
  //   const statsString =
  //    `
  //     <p> ${name}: ${value}
  //   `
  //   div.innerHTML = `${statsString}`
  //   pokemonContainer.innerChild += div
  //   debugger
  // }

  pokemonContainer.innerHTML += `
  <div class="pokemon-card pokemon-frame flip-box" data-id="${id}">
  <h1 class="center-text">${name}</h1>
    <div class=" flip-box-inner">
      <div class="pokemon-image flip-box-front">
        <img data-id="${id}" data-action="flip" class="toggle-sprite" src="${imgFront}">
      </div>
      <div class="pokemon-image flip-box-back">
        <img data-id="${id}" data-action="flip" class="toggle-sprite" src="${imgBack}">
      </div>
    </div>
  </div>

  `
  // formatStats();
} // <= END OF DISPLAYONEPOKEMON FUNCTION

//////////////////////////////////////
// NOTE: FLIP FUNCTIONALITY IN CSS  //
//////////////////////////////////////

// SEARCH FUNCTIONALITY

// PSEUDO CODE FOR FILTER
// add eventListener to input field (done)
// grab input field text value as a variable (done)
// grab all the h1 tags on page and turn them into an array (done)
// compare that value with the h1 values on page
// conditionally, if h1 value DOES NOT contain input field value then
// grab the h1's parentElement and set .style.display to 'none'
// ELSE, set .style.display to ''

const addEventListenerToPokemonSearchInput = () => {
  pokemonSearchInput.addEventListener('input', filterPokemon)
}

const filterPokemon = (event) => {
  console.clear();
  console.log("filter function fired!!")
  let userInput = event.target.value.toLowerCase()
  let h1Collection = document.getElementsByClassName('center-text')
  let h1ArrayFromCollection = Array.from(h1Collection)
  // each item in array has .innertext of pokemon name
  h1ArrayFromCollection.forEach(h1Element => {
    if(h1Element.innerText.includes(userInput)){
      console.log(h1Element.innerText);
      h1Element.parentElement.style.display = ''
      } else {
        h1Element.parentElement.style.display = 'none'
      }
    })
  }

// CALLS
getAllPokemon();
addEventListenerToPokemonSearchInput();
// addEventListenerToPokemonContainerForFlip();

}) // End of DOMContentLoaded
