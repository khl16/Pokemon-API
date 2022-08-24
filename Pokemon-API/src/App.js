import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemons] = useState([])

  function findThePokemons(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(res =>res.json())
    .then(data => setPokemons(data.results))

  }
  return (
    <div className="App">
   <button className='button' onClick={findThePokemons}>Fetch pokemon Data</button>
   {pokemon.map((pokemon,i) => <p key={i}>{pokemon.name}</p>)}
    </div>
  );
}

export default App;
