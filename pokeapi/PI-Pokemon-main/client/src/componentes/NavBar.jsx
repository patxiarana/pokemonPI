import React from "react";
import { NavLink } from "react-router-dom";
import "../componentes/syles.css/NavBar.css"
export default function NavBar(){
return(
<React.Fragment>
<NavLink to={'/Home'} className='Home'    >Home</NavLink>
 
 </React.Fragment>
)
}