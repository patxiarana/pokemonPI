const axios = require("axios");
const { Pokemones, Tipo} = require('../metodos/PedidoApi')
const { Router } = require("express");


const filterPoke = async (name) =>{
  if(name){
const pokeDetail = await Pokemones()
let DetailPoke = pokeDetail.filter(p => p.name === name )
return DetailPoke
}else{
  return { "msg" : "no llega el nombre"}
}
}
const filterID = async (id) =>{

  try{
  const Allid = await Pokemones();
  if (id) {
    let   PokeID = Allid.filter( p => p.id == id);
     return PokeID
  }
}
  catch(e){
    console.log(e)
  }
}










module.exports = {filterPoke, filterID}


