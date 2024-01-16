const POKEMON_API_BASE_URL = "https://raw.githubusercontent.com/PokeAPI";

// Shows a single Pokemon, with their name, image, and type.

/**
 *  Takes information about a single pokemon: id, name, type, and
 *  base_experience.
 *
 *  Example:
 *  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62}
 *
 *  Returns a <li> about the pokemon including their name, image, and type.
 *
 *  Images about the pokemon can be found at:
 *  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
 *
 */
function Pokecard({pokemon}) {

  const pokemonURL = `/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <li>
      <p>Name: {pokemon.name}</p>
      <p>Type: {pokemon.type}</p>
      <img src={`${POKEMON_API_BASE_URL}${pokemonURL}`} />
    </li>
  )

}

export default Pokecard;