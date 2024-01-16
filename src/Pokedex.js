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
function Pokedex({ hand, experience, isWinner }) {

  const winnerMessage = isWinner ? `You win, with ${experience}exp!` : null;

  return (

    <div>
      <ul>
        {hand.map(p => <Pokecard pokemon={p}/>)}
      </ul>
    <h2>{winnerMessage}</h2>
    </div>
  );
}

export default Pokedex;
