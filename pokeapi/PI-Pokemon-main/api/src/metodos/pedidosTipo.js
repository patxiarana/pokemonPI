const axios = require("axios");
const { Router } = require("express");
const {Tipo,Pokemon} = require('../db');
const {Op} = require("sequelize")

const PokeTI = async () => {
 try{
const Getypes = await axios.get('https://pokeapi.co/api/v2/type')
const types =  Getypes.data.results

//const tipos = []; 
const pokeTypes = types.map(ty => ty.name)
  
let TypesPoke =  pokeTypes.map(ty =>{
     Tipo.findOrCreate({
    where: { name: ty },
   });
})
 TypesPoke = await Tipo.findAll()
return TypesPoke;
 
}catch(e){
console.log(e)
}
}





module.exports = {  PokeTI };
