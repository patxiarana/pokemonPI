const axios = require("axios");
const { Router } = require("express");


const PedidoHome = async () =>{

    try{
const request = await axios('https://pokeapi.co/api/v2/pokemon?offset=20&limit=40')
    
   infoHome = request.data.results
     const Home = [];
     
     for(var i = 0 ; i<infoHome.length ; i++){
      const {url} = infoHome[i];
      const {data} = await axios(url)
      Home.push({
    name : data.name,
    spriteSrc: data.sprites. front_default,
    types: data.types.map((e) => e.type.name),
      })
     }
 return Home; 
    }catch(e){
  
 console.log(e)

    }






}


module.exports = {PedidoHome}