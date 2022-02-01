import './App.css';
import React from 'react';
import Home from './componentes/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PokemonDetail  from './componentes/pokemonDetail';
import SearchBar from './componentes/SearchBar';
import CreatePokemon from './componentes/CreatePokemon';
import landingPage from './componentes/landignpage';

function App() {
  return (
   <BrowserRouter>
  <landingPage/>
   <Route exact path="/" component={landingPage}/>
  <Route exact path="/Home" component={Home}/>
  <Route exact path="/pokemons/:id" component={PokemonDetail}/>
  <Route exact path="pokemons/name?" component={SearchBar}/>
  <Route exact path="/Home/createpokemon" component={CreatePokemon}/>
  </BrowserRouter>
);
}

export default App;
