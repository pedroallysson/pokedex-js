

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

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg"  alt="${pokemon.name}"/>
                </div>
            </li>
            `
}


const pokemonLista = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons = []) => {
    pokemonLista.innerHTML += pokemons.map(convertPokemonToLi).join('')
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

