import  React  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import HomeCard from './HomeCard';
import { getAllPokemons } from '../actions';
import  SearchBar from '../componentes/SearchBar'
import { NavLink } from 'react-router-dom';
 import Logo from '../componentes/img/logo.jpg'

const HomePokemon = () => {
    
      const dispatch = useDispatch()
         useEffect(() => {
         
          dispatch(getAllPokemons());
        });
  
        const allPokemons = useSelector((state) => state.pokemons)
      
    return (
       
        <React.StrictMode>
       
       <div>
       <SearchBar/>
          <NavLink to = {"/Home/createpokemon"}>CrearPokemon</NavLink>
                    {allPokemons?.map((e) => (
                    <HomeCard   
                    id = {e.id}
                    key= {e.id}
                    name ={e.name}
                     Tipos={Array.isArray(e.Tipos) ? e.Tipos.map(el => el.name + '' ) : e.Tipos + ''  }
                    spriteSrc={e.spriteSrc ? e.spriteSrc :  Logo}
                    
                    />
                    
                    ))}
        </div>
        </React.StrictMode>

      






    );
};

export default  HomePokemon;