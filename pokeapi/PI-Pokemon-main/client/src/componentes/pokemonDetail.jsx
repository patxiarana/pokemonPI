import React from "react"
import CardDetail from "./CardDetail"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPoke } from "../actions"
import Logo from '../componentes/img/logo.jpg'
const PokemonDetail = (props) => {
    let  params  = props.match.params.id
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(getPoke(params));
      });

      const PokemonD = useSelector((state) => state.pokemon )
       
          
    return (
        <div>   
                    {
                    PokemonD?.map((e) =>(
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
                    Tipos={ e.Tipos ? e.Tipos.map(el => el.name + '' ) : e.Types + ''  }
                    spriteSrc={e.spriteSrc ? e.spriteSrc :  Logo}
                   />
                
                    ))}
        </div>
    );





    }


    export default  PokemonDetail;


