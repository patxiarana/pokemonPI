import React from "react";



const CardDetail = (props) =>{

    return (
        <div>
  <img src={props.spriteSrc} />
      <p>ID: {props.id}</p> 
      <p>name:{props.name}</p>
      <p>attack:{props.attack}</p> 
    <p>defense:{props.defense}</p> 
     <p>speed:{props.speed}</p> 
     <p>hp:{props.hp}</p>  
     <p>weigth:{props.weigth}</p>
      <p>height:{props.height}</p>
     <p>Tipo:{props.Tipos}</p>
                
        </div>
    );




}



export default CardDetail;