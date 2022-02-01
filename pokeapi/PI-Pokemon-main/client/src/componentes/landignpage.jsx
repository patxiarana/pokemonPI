import React from "react";
import NavBar from "./NavBar";
import "../componentes/syles.css/landingpage.css"

const landingPage = () => {

return(

<React.StrictMode>
 <div className='home'>
<NavBar/>
</div>
<div className='img' >
<h1 className="POKE-API">POKE-API</h1>
  </div>



</React.StrictMode>
)
};

export default landingPage;