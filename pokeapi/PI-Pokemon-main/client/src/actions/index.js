import axios from 'axios';


export function  getAllPokemons() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/Pokemons");
    return dispatch({
      type: "GET_POKEMONS",
      payload: json.data,
    });
  };

}

export function SearchName(name){
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/pokemons/name?name="+ name);
    return dispatch({
      type: "GET_NAME",
      payload: json.data,
    });
  };
}

export function getPoke(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/pokemons/" + id);
      return dispatch({
        type: "GET_ID",
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

}

 

export function PokemonCreate(Input){
  return async function (dispatch){
   try{  
    var json = await axios.post("http://localhost:3001/pokemons/",Input);
   
  return dispatch({
type: "CREATE_POKEMON",
payload: json.data
})
}catch (err){
  console.log(err)
  
}
}
};
  


export function getTypes(){
return async function(dispatch){
try{
var json = await axios("http://localhost:3001/types")
return dispatch({
type: "GET_TYPES",
payload: json.data
})
}catch(e){

}
}
}

export function filtradoDeTipos(payload){

return({
type:"FILTRADO_TIPO",
payload
})
}

export function filtradoDataBase(payload){
return ({

type: "FILTRADO_DATABASE",
payload

})


}


export function OrderAlfabetico(payload){
return({
      type: "ORDEN_ALFABETICO",
      payload
    })

}


export function OrderFuerza(payload){


  return({
  type: "ORDEN_FUERZA",
  payload


  })






}