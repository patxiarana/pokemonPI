import React from "react";
import { NavLink } from "react-router-dom";
import "../componentes/syles.css/Detail.css"

const CardDetail = (props) =>{

    return (
        <div className="CardDetail">
  <img src={props.spriteSrc} />
      <p className="texto">ID: {props.id}</p> 
      <p className="texto">name:{props.name}</p>
      <p className="texto">attack:{props.attack}</p> 
    <p className="texto">defense:{props.defense}</p> 
     <p className="texto">speed:{props.speed}</p> 
     <p className="texto">hp:{props.hp}</p>  
     <p className="texto">weigth:{props.weigth}</p>
      <p className="texto">height:{props.height}</p>
     <p className="texto">Tipos:{props.Tipos}</p>
    
    <NavLink to={'/Home'}>
    <button className="button">HOME</button>         
    </NavLink>

        </div>
    );




}



export default CardDetail;