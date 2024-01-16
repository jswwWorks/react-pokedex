import './App.css';
// import Pokedex from './Pokedex';
import Pokegame from './Pokegame';

const POKEMONS = [
  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
  {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
  {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
  {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
  {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
  {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
  {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
  {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
] // we might want to pass this in at the component level of the pokemon game
// that we'll make in further study (we might want to play games with) varied
// pokemon

function App() {
  return (
    <div>
      <Pokegame pokemons={ POKEMONS }/>
    </div>
  );
}

export default App;

// Questions for code review
// 1) capitalization of POKEMONS constant across multiple files?
// 2) Unique key prop warning from console -- should it be divs rather than ul?

// react only changes things that change
// when you map, you want to give each thing a non-changing id
// add id property to each pokecard so it has an "id" to easily grab
// the pokecards each have their own id so this is convenient