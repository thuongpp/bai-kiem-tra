const pokemonName = document.querySelector('.name')
const type = document.querySelector('.type')
const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const bio = document.querySelector('.bio')
const search = document.querySelector('#search')
const img = document.querySelector('.img')

search.addEventListener('change', (event) => (
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    .then(response => response.json())
    .then((data) => {
        pokemonName.innerHTML = data.name;
        type.innerHTML = data.type;
        height.innerHTML = data.height;
        weight.innerHTML = data.weight;
        bio.innerHTML = data.bio;
        img.innerHTML = data.url;
    })
)); 