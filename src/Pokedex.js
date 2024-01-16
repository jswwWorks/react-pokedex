import Pokecard from "./Pokecard";

/**
 *  Takes an array of objects, where each object contains information on a
 *  different pokemon.
 *
 *  Renders a sequence of Pokecard components.
 */
function Pokedex({pokemons}) {
  return (
    <ul>
      {pokemons.map(p => <Pokecard pokemon={p}/>)}
    </ul>
  );
}

export default Pokedex;
