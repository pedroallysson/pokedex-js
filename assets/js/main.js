

// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// fetch(url)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (jsonBody) {
//         console.log(jsonBody)
//     })
//     .catch(function(error){
//         console.error(error)
//     })
//     .finally(function(){
//         console.log('Requisição concluida!')
//     })

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 40;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
          <a href="details.html">
            <span class="name">${pokemon.name}</span>
            <span class="number">#${pokemon.number}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
          </a>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

//------------------
// pokeApi.getPokemons().then((pokemons = []) => {


//         const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))

//         const newHtml = newList.join('')

//         pokemonLista.innerHTML += newHtml


//         })
//----------------------------
    //     const listItems = []



    //     for (let i = 0; i < pokemons.length; i++) {
    //         const pokemon = pokemons[i];
    //         listItems.push(convertPokemonToLi(pokemon))
    //         // pokemonLista.innerHTML += convertPokemonToLi(pokemon)
    //     }     

    //     console.log(listItems)
    // })




//     function somarValor(num1, num2){
//         return num1 + num2;
//     }

//     console.log(somarValor(10,5));
    

// const x = 10 + 10;
// console.log(x);

