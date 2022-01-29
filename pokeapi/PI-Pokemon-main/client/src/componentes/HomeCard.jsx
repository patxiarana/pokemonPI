
import React from "react";
import { NavLink } from "react-router-dom";



const HomeCard = (props) => {
    
    return (
        <div>
       <p>name:{props.name}</p>
       <p>tipos:{props.Tipos}</p>
      <img src={props.spriteSrc}  alt= "imagen pokemon" />
      <NavLink to = {"/pokemons/"+props.id}>Detail</NavLink>
        </div>
    );
};

export default HomeCard;

