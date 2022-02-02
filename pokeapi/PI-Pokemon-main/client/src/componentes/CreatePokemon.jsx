import React, { StrictMode } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { PokemonCreate } from "../actions";
import { useEffect } from "react";
import { getTypes } from "../actions";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "../componentes/syles.css/CreatePokemon.css"


let validate = (input) =>{
  let error = {}
  var ExpRegSoloLetras="^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$"; 
  var ExpRegSoloNumeros="^[0-9]+$";

   if(input.name.match(ExpRegSoloLetras) === null ){
   error.name = "solo se admiten letras como valores para el nombre";
 }
 if(input.name.length <= 0){
     error.name="no se admiten campos vacios"
     }
  if(input.attack.match(ExpRegSoloNumeros) === null ){
   error.attack='solo se admiten numeros como valor'
  }
   if(input.attack.length  <= 0 ){
     error.attack ="no se admiten campos vacios"
    }
   if(input.speed.match(ExpRegSoloNumeros) === null ){
    error.speed='solo se admiten numeros como valor'
   }
   if(input.speed.length <= 0){
      error.speed="no se admiten campos vacios"
    }
   if(input.defense.match(ExpRegSoloNumeros) === null ){
    error.defense='solo se admiten numeros como valor'
   }
    if(input.defense.length <= 0){
      error.defense="no se admiten campos vacios"
    }
    if(input.weight.match(ExpRegSoloNumeros) === null ){
    error.weight='solo se admiten numeros como valor'
    }
    if(input.weight.length <= 0){
      error.weight = "no se admiten campos vacios"
    }
     if(input.height.match(ExpRegSoloNumeros) === null ){
    error.height='solo se admiten numeros como valor'
     }
    if(input.height.length  <= 0){
      error.height ="no se admiten campos vacios"
    } 
   if(input.hp.match(ExpRegSoloNumeros) === null ){
    error.hp='solo se admiten numeros como valor'
   } 
   if (input.hp.length <= 0){
     error.hp='no se admiten campos vacios'
   }  
  return error;
}




const CreatePokemon = () => {
   
let dispatch = useDispatch()
   useEffect(() => {
    dispatch(getTypes());
      },[]);


   const TypesPoke = useSelector((state) => state.tipo)

  const arrayTipos = TypesPoke.map( (t)=> t)

   let [input, setInput] = useState({name:'', tipo:[], attack:'',
    defense:'',speed:'',weight:'',height:'',hp:'' })
    
    let [error, setErrors] = useState({});
   
  



    
    let handelselect = (e) =>{
     
      setInput({
        ...input,
        tipo:[...input.tipo,e.target.value]
        })
    
      }
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
     
    return (
      <StrictMode>
        
       <div className="create">
    <form onSubmit={handelsubmit} className="formulario">
     <label className="names">Name</label>
     <input name = "name" value={input.name} onChange={handelchange}/>
     {
                error.name && (
                  <p className="error">{error.name}</p>
                )
              }  
      <label className="names">attack</label>
     <input name="attack" value = {input.attack}  onChange={handelchange}/>
     
     {
                error.attack && (
                  <p className="error">{error.attack}</p>
                )
              }  
     <label className="names">defense</label>
     <input name="defense" value = {input.defense}  onChange={handelchange}/>
              {
                error.defense && (
                  <p className="error">{error.defense}</p>
                )
              }  
     
     <label className="names">speed</label>
     <input name="speed" value = {input.speed}  onChange={handelchange}/>
     {
                error.speed && (
                  <p className="error">{error.speed}</p>
                )
              }  
     <label className="names">weight</label>
     <input name= "weight" value = {input.weight}  onChange={handelchange}/>
     {
                error.weight && (
                  <p className="error">{error.weight}</p>
                )
    
                }
     <label className="names">height</label>
     <input name= "height" value = {input.height}  onChange={handelchange}/>
     {
      error.height && (
        <p className="error">{error.height}</p>
      )
     }
     <label className="names">hp</label>
     <input name= "hp" value = {input.hp}  onChange={handelchange}/>
     {
      error.hp&& (
        <p className="error">{error.hp}</p>
      )
     }
    
      <label className="names">Tipos</label>
     <div>
       <select onChange ={handelselect}>
        {
        arrayTipos?.map(t =>(
               <option value = {t.name}>{t.name}</option>    
         ))
         }
      </select>
       <ul><li className="tipos">{input.tipo.map(ty => ty + " , ")}</li></ul>                   
       
       </div>
         <button type="submit">Create</button>
        </form>
        </div>
      <NavLink to={'/Home'}>
      <button className="btnHome">HOME</button>
       </NavLink>
      </StrictMode>
    );
   
};

export default CreatePokemon;


