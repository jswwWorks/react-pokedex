import Pokecard from "./Pokecard";

/**
 *  Takes an array of objects, where each object contains information on a
 *  different pokemon.
 *
 *  Renders a sequence of Pokecard components.
 */
function Pokedex({pokecards}) {
  return (
    <ul>
      {pokecards.map(p => <Pokecard pokemon={p}/>)}
    </ul>
  );
}

export default Pokedex;
