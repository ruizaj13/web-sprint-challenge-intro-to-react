import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData, setCharData] = useState([])


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people/')
    .then(res => {
      setCharData(res.data.results)
    })
    .catch( err => {
      console.log('The Sith Have Won')
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Folk</h1>
      <Character data={charData}/>
    </div>
    
  );
}

export default App;
