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

/*
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const getAllPokemons = () =>{
 (axios.get('http://localhost:3001/Pokemons'))
} */
/*export const getAllPokemons = () => dispatch => {
    axios.get('http://localhost:3001/Pokemons')
    .then(json => {
   dispatch({ type:  "GET_ALL_POKEMONS" , payload: json });
 });
 
};*/


