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

  // Calculate the sum experience level for each hand of pokemon
  //const hand1exp = hand1.map(p => p.base_experience);

  const hand1Exp = sumExperience(hand1);
  const hand2Exp = sumExperience(hand2); // TODO: pass this exp to the pokedex

  // Determine winner
  const isHand1Winner = hand1Exp > hand2Exp ? true : false;
  const isHand2Winner = hand2Exp > hand1Exp ? true : false;

  console.log(hand1Exp, hand2Exp, "both the experience levels");
  // if tied, neither win? for now this is the case

  console.log("is hand1 winner", isHand1Winner,"or is hand2 winner", isHand2Winner);
  return (
    <div>
      <div>
        <Pokedex className="hand1" hand={ hand1 } experience={ hand1Exp }
        isWinner={ isHand1Winner }/>
      </div>
      <div>
        <Pokedex className="hand2" hand={ hand2 } experience={ hand2Exp }
        isWinner={ isHand2Winner }/>
      </div>

    </div>
  )

}


/**
 *  Takes a hand, which is a list of objects that each contain information
 *  about an individual pokemon.
*
*  Calculates and returns the sum of the base_experience number for the
*  entire hand.
*/
function sumExperience(hand) {

  let handExp = 0;

  for (const pokemon of hand) {
    console.log('this is the pokemon', pokemon);
    console.log(typeof(pokemon.base_experience), "type of base_experience!");
    handExp += pokemon.base_experience;
  }

  return handExp;
}

export default Pokegame;