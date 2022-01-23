
const axios = require("axios");
const { Router } = require("express");
const { Pokemon } = require("../db")

const getPokemons = async () => {

    try { 
const repost = await axios('https://pokeapi.co/api/v2/pokemon?offset=20&limit=40')
//const repost = await axios('https://pokeapi.co/api/v2/pokemon/59/')
//console.log(repost.data.sprites)
// estructura de los pokemons.
pokeArray = repost.data.results;
let name = [];
const infoPoke = [];
for (let i = 0; i < pokeArray.length; i++) {
    const { url } = pokeArray[i];
    const { data } = await axios(url);
    infoPoke.push({
      id: data.id,
      name: data.name,
      spriteSrc: data.sprites. front_default,
      types: data.types.map((e) => e.type.name),
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      hp: data.stats[0].base_stat,
      weight: data.weight,
      height: data.height,
    });
  }
return infoPoke;
}    

catch(e){
console.log(e)
}}
getPokemons()
const getDB  = async ()  => {
  const PokeBase = await Pokemon.findAll()
  return  PokeBase;
 }
 
const Pokemones = async () => {

const PokeaPI = await  getPokemons() 
const BasePoke = await getDB()

const PokeTodos = [...PokeaPI, ... BasePoke]

return PokeTodos

}



module.exports = { Pokemones, getPokemons }