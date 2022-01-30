import './App.css';
import React from 'react';
import  NavBar  from './componentes/NavBar'; 
import Home from './componentes/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PokemonDetail  from './componentes/pokemonDetail';
import SearchBar from './componentes/SearchBar';
import CreatePokemon from './componentes/CreatePokemon';
import logo from './componentes/img/mewLogo.jpg'


function App() {
  return (
   <BrowserRouter>
      <NavBar/>
   
  <Route exact path="/Home" component={Home}/>
  <Route exact path="/pokemons/:id" component={PokemonDetail}/>
  <Route exact path="pokemons/name?" component={SearchBar}/>
  <Route exact path="/Home/createpokemon" component={CreatePokemon}/>
  </BrowserRouter>
);
}

export default App;
