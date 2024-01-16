import Pokedex from './Pokedex';
/**Accepts like of 8 pokemon
 *
 * Randomly assigns them into two hands of 4 cards each
 *
 * Renders two POkedex components, one for each hand.
 */
function Pokegame({ pokemons }){
  const hand1 = [];

console.log("Pokemons from App:", pokemons)
  while(hand1.length < 4){
    let randomIdx = Math.floor(Math.random() * pokemons.length);
    hand1.push(pokemons[randomIdx]);
    pokemons.splice(randomIdx, 1);
  }

  const hand2 = [...pokemons];

  return (
    <div>
      <div>
        <Pokedex className="hand1" hand={ hand1 }/>
      </div>
      <div>
        <Pokedex className="hand2" hand={ hand2 }/>
      </div>

    </div>
  )

}

export default Pokegame;