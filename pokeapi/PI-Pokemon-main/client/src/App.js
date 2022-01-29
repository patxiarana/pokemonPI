import './App.css';
import React from 'react';
import  NavBar  from './componentes/NavBar'; 
import Home from './componentes/Home';
import { Route } from 'react-router-dom';
import PokemonDetail  from './componentes/pokemonDetail';
import SearchBar from './componentes/SearchBar';
import CreatePokemon from './componentes/CreatePokemon';



function App() {
  return (
    <React.Fragment>
      <NavBar/>
    
  <Route exact path="/Home" component={Home}/>
  <Route exact path="/pokemons/:id" component={PokemonDetail}/>
  <Route exact path="pokemons/name?" component={SearchBar}/>
  <Route exact path="/Home/createpokemon" component={CreatePokemon}/>

  </React.Fragment>
);
}

export default App;
