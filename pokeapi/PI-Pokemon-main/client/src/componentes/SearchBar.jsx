import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchName } from "../actions";


 export default function SearchBar(){
  const dispatch = useDispatch;
  const [name, setName] = useState('')

    const handelchange= (e) =>{
   e.preventDefault()
    setName(e.target.value)
}
const handelsubmit = (e) =>{
    e.preventDefault()
    dispatch(SearchName(name))
}

return(
<div>

<input
type="text"
placeholder="buscar..."
onChange={handelchange}
/>
<button type="submit" onClick={handelsubmit}>buscar</button>


</div>
) 
};