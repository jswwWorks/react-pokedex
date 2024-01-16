const POKEMON_API_BASE_URL = "https://raw.githubusercontent.com/PokeAPI";

/**
 *  Takes information about a single pokemon: id, name, type, and
 *  base_experience.
 *
 *  Example of the information:
 *  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62}
 *
 *  Returns a <li> about the pokemon including their name, image, and type.
 *
 *  Images about the pokemon can be found at:
 *  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
 *
 */
function Pokecard({ pokemon }) {
  const pokemonURL = `/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <li>
      <p>Name: {pokemon.name}</p>
      <p>Type: {pokemon.type}</p>
      <img src={`${POKEMON_API_BASE_URL}${pokemonURL}`}
      alt={`Image of ${pokemon.name}`}/>
    </li>
  )

}

export default Pokecard;


// often you'll only pass in the specific properties you need in react
// rather than passing in the whole object itself

// this makes things a bit more readable