import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { PokemonCreate } from "../actions";
import { useEffect } from "react";
import { getTypes } from "../actions";
import { useSelector } from "react-redux";




let validate = (input) =>{
  let error = {}
  var ExpRegSoloLetras="^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$"; 
  var ExpRegSoloNumeros="^[0-9]+$";
 if(input.name.match(ExpRegSoloLetras) === null ){
   error.name = "solo se admiten letras como valores para el nombre";
  }if(input.attack.match(ExpRegSoloNumeros) === null ){
    error.attack='solo se admiten numeros como valor'
  } if(input.speed.match(ExpRegSoloNumeros) === null ){
    error.speed='solo se admiten numeros como valor'
  }  if(input.defense.match(ExpRegSoloNumeros) === null ){
    error.defense='solo se admiten numeros como valor'
  }  if(input.weight.match(ExpRegSoloNumeros) === null ){
    error.weight='solo se admiten numeros como valor'
  }   if(input.height.match(ExpRegSoloNumeros) === null ){
    error.height='solo se admiten numeros como valor'
  } if(input.hp.match(ExpRegSoloNumeros) === null ){
    error.hp='solo se admiten numeros como valor'
  }

 

return error;

}
const CreatePokemon = () => {
   
  
  let dispatch = useDispatch()
   useEffect(() => {
    dispatch(getTypes());
      },[]);


   const TypesPoke = useSelector((state) => state.tipo)

   let [input, setInput] = useState({name:'', tipo:[], attack:'',
    defense:'',speed:'',weight:'',height:'',hp:'' })
    
    let [error, setErrors] = useState({});

 

       
      





  let handelchange = (e) => {
        e.preventDefault()
        setInput( {...input, [e.target.name]: e.target.value})
      
        setErrors(validate(
          {...input, [e.target.name]: e.target.value}))

      }
    let handelsubmit = (e) => {
        e.preventDefault()
        if(Object.keys(error).length !== 0){
      return alert('error, algun valor debe ser invalido')   
    }
        dispatch(PokemonCreate(input))
        alert('pokemon creado')
      
    }
     
    
   let handelselect = (e) =>{
  setInput({
    ...input,
    tipo:[...input.tipo,e.target.value]
 })
}
            
    return (
        <div>
       {
        


       }


    <form onSubmit={handelsubmit}>
     <label>Name</label>
     <input name = "name" value={input.name} onChange={handelchange}/>
     {
                error.name && (
                  <p className="error">{error.name}</p>
                )
              }  
      <label>attack</label>
     <input name="attack" value = {input.attack}  onChange={handelchange}/>
     
     {
                error.attack && (
                  <p className="error">{error.attack}</p>
                )
              }  
     <label>defense</label>
     <input name="defense" value = {input.defense}  onChange={handelchange}/>
              {
                error.defense && (
                  <p className="error">{error.defense}</p>
                )
              }  
     
     <label>speed</label>
     <input name="speed" value = {input.speed}  onChange={handelchange}/>
     {
                error.speed && (
                  <p className="error">{error.speed}</p>
                )
              }  
     <label>weight</label>
     <input name= "weight" value = {input.weight}  onChange={handelchange}/>
     {
                error.weight && (
                  <p className="error">{error.weight}</p>
                )
    
                }
     <label>height</label>
     <input name= "height" value = {input.height}  onChange={handelchange}/>
     {
      error.height && (
        <p className="error">{error.height}</p>
      )
     }
     <label>hp</label>
     <input name= "hp" value = {input.hp}  onChange={handelchange}/>
     {
      error.hp&& (
        <p className="error">{error.hp}</p>
      )
     }
      <label>Tipos</label>
     <div>
       <select onChange ={handelselect}>
        {
         TypesPoke?.map(ty =>(
               <option value = {ty.name}>{ty.name}</option>    
         ))
         }
      </select>
       <ul><li>{input.tipo.map(ty => ty + " , ")}</li></ul>                   
       </div>
         <button type="submit">Create</button>
        </form>
        </div>
    );
};

export default CreatePokemon;


