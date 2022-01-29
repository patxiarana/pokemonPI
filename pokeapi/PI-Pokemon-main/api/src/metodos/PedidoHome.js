const axios = require("axios");
const { Router } = require("express");
const { Pokemon, Tipo  } = require('../db')

const PedidoHome = async () =>{

  const DataBase= await Pokemon.findAll({
    attributes:["name" , "id"] ,
       include: {
      model: Tipo,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

    try{
const request = await axios('https://pokeapi.co/api/v2/pokemon?offset=20&limit=40')
   infoHome = request.data.results
     const Home = [];
     for (var i = 0 ; i<infoHome.length ; i++){
      const {url} = infoHome[i];
      const {data} = await axios(url)
      Home.push({
      id: data.id,
    name : data.name,
    spriteSrc: data.sprites.front_default,
    Tipos: data.types.map((e) => e.type.name),
      })
     }
      allPokes = [...Home,...DataBase]
  
     return allPokes;
    } catch (e){
  
    

    }

  




}

module.exports = {PedidoHome}