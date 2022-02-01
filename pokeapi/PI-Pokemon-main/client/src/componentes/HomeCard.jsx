
import React from "react";
import { NavLink } from "react-router-dom";
import "../componentes/syles.css/HomeCard.css"


const HomeCard = (props) => {
    
    return (
        <div className="contenedor">
       <p className="texto">name:{props.name}</p>
       <p className="texto">tipos:{props.Tipos}</p>
      <img src={props.spriteSrc}  alt= "imagen pokemon" className="imgHome" />
      <NavLink to = {"/pokemons/"+props.id}>Detail</NavLink>
        </div>
    );
};

export default HomeCard;

