import React from "react"
import CardDetail from "./CardDetail"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPoke } from "../actions"
import Logo from '../componentes/img/ghost.jpg'
import "../componentes/syles.css/Detail.css"
import { NavLink } from "react-router-dom"
import { Vaciamiento } from "../actions"

const PokemonDetail = (props) => {
  
  let  params  = props.match.params.id
  let dispatch = useDispatch()
  let pokemonId = useSelector((state) => state.detail)
  console.log(params)
  useEffect(()=>{
    dispatch(getPoke(params))
    dispatch(Vaciamiento(params))  
  },[])
   
   
      console.log(pokemonId)
    return (
      <div>
        
      <div className="cuerpo">
        <div className="CardSpace">   
                    { pokemonId.length < 1 ?   <p className="cargando">cargando...</p> 
                    :
                    pokemonId.map((e) =>(
                    <CardDetail  
                    key ={e.id}
                    id={e.id}
                    name={e.name}
                    attack={e.attack} 
                    defense={e.defense} 
                    speed={e.speed} 
                    hp={e.hp}   
                    weigth={e.weigth}
                    height={e. height}
                    Tipos={  e.Tipos ? e.Tipos.map(el => el.name + '' ) : e.types ? e.types + '' :  e.Tipos1 }
                    spriteSrc={e.spriteSrc ? e.spriteSrc :  Logo}
                   /> 
                    ))
                   
                  }

                
        </div>
        </div>  

        </div>
    );


  

    }


    export default  PokemonDetail;