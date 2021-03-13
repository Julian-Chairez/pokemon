import './App.css';
import React, { useEffect, useState } from 'react';
import PokemonCard from "./components/pokemon"
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios";


function App(){

 const [pocketmon, setPocketmon] = useState([]);

  const Pokemon = () => {
  
    
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=1&limit=807")
        .then (res => res.json())
        .then (res => setPocketmon(res.results))
        .catch(err => console.log(err))
  

  }
  return (
    <div className="App">
    <button
    onClick={Pokemon}
    >Fetch Pokemon</button>
    
    {
      pocketmon.map((poke,i)=><PokemonCard
        key ={i}
        poke ={poke}
      />)
    }
    
    </div>
  );
  }


export default App;