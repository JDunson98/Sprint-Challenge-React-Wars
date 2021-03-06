import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  let [characters, setCharacters] = useState([]);
  console.log(characters[2]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results)
        console.log(response);
      })
      .catch(err => {
        console.log('something went wrong', err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="container">
          {characters.map(character => (
            <Character key={character.id} name={character.name} species={character.species} image={character.image} location={character.location} status={character.status}/>
          ))}
        </div>
    </div>
  );
}

export default App;
