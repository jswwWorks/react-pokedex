import Pokecard from "./Pokecard";

/**
 *  Takes an array of objects, where each object contains information on a
 *  different pokemon.
 *
 *  Example of an object in the array:
 *  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62}
 *
 *  Renders a sequence of Pokecard components.
 */
function Pokedex({ hand }) {
  return (
    <ul>
      {hand.map(p => <Pokecard pokemon={p}/>)}
    </ul>
  );
}

export default Pokedex;
