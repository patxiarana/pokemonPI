import  React  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,useState } from 'react';
import HomeCard from './HomeCard';
import { getAllPokemons } from '../actions';
import  SearchBar from '../componentes/SearchBar'
import { NavLink } from 'react-router-dom';
import Logo from '../componentes/img/ghost.jpg'
import PaginadoComp from '../componentes/paginado'
import { filtradoDeTipos } from '../actions';
import { filtradoDataBase } from '../actions';
import { OrderAlfabetico } from '../actions';
import { OrderFuerza } from '../actions';
import '../componentes/syles.css/Home.css'

const HomePokemon = () => {
    
      const dispatch = useDispatch()
         useEffect(() => {
          dispatch(getAllPokemons());
        },[]);
      const allPokemons = useSelector((state) => state.pokemons)
       
      const [orden, setOrden] = useState('')
      const [PaginaActual, setPaginaActual] = useState(1)
      const [PokemonPorPagina, setPokemonPorPagina] = useState(12)
      const indiceUltimoPokemon = PaginaActual * PokemonPorPagina ;
      const indicePrimerPokemon = indiceUltimoPokemon - PokemonPorPagina;
      const PokemonActual = allPokemons.slice(indicePrimerPokemon,indiceUltimoPokemon)

      const paginado = (NumeroPagina) =>{
        setPaginaActual(NumeroPagina)
    }

    const HandelFilterTipo = (e) =>{
       dispatch(filtradoDeTipos(e.target.value)) 
     }
     
     const HandelfilterDT = (e) => {
      dispatch(filtradoDataBase(e.target.value))
}
      

     const HandelAlfabetico = (e) =>{
      dispatch(OrderAlfabetico(e.target.value))
      setPaginaActual(1)
      setOrden(`ordenado$ {e.target.value}`)
     }

     
     const HandelOdenFuerza = (e) =>{
        dispatch(OrderFuerza(e.target.value))
        setPaginaActual(1)
        setOrden(`ordenado$ {e.target.value}`)
        
       }
  




    return (
       <React.StrictMode>

    <div className='body'>

    <PaginadoComp className= 'paginado' 
    PokemonPorPagina={PokemonPorPagina}
    allPokemons={allPokemons.length}
    paginado={paginado}
    />

      <SearchBar className='searchBar' />
       <div>
       <div className="select">
       <select onChange={(e) => HandelAlfabetico(e)}className='select_value'>
       <option value = 'ascAL'>AscendenteAL</option> 
       <option value ='descAL'>DescendenteAL</option>
      </select>
      </div>
      <div class="select">
      <select onChange={(e) => HandelOdenFuerza (e)} className='select_value'>
       <option value = 'ascfu'>AscendenteFU</option> 
       <option value ='descfu'>DescendenteFU</option>
      </select>
     </div>
       <div class="content-select">
       <select onChange={ (e) => HandelFilterTipo(e)}className='select_value'>
       <option value = "todos">Todos</option> 
       <option value = "normal">normal</option> 
       <option value = "flying">flying</option> 
       <option value = "ground">ground</option> 
       <option value = "rock">rock</option> 
       <option value = "bug">bug</option> 
       <option value = "poison">poison</option> 
       <option value = "ghost">ghost</option> 
       <option value = "steel">steel</option> 
       <option value = "fire">fire</option> 
       <option value = "water">water</option> 
       <option value = "grass">grass</option> 
       <option value = "fighting">fighting</option> 
       <option value = "psychic">psychic</option> 
       <option value = "ice">ice</option> 
       <option value = "dragon">dragon</option> 
       <option value = "dark">dark</option> 
       <option value = "fairy">fairy</option> 
       <option value = "unknown">unknown</option> 
       <option value = "shadow">shadow</option> 
       <option value = "electric">electric</option> 
       </select>

       <select onChange={e => HandelfilterDT (e)}className='select_value'>
       <option value = 'creado'>Creado</option> 
       <option value ='existente'>Existente</option>
      </select>
     </div>
  <NavLink to = {"/Home/createpokemon"} className='crear-pokemon'>
     <button className='btnreate'>crearPokemon</button>
  </NavLink>
    
           <div className='pokemon_map'>
            {PokemonActual?.map((e) => (

                    <HomeCard  
                    id = {e.id}
                    key= {e.id}
                    name ={e.name}
                    Tipos= {  e.Tipos ? e.Tipos.map(el => el.name + '' ) : e.Types ? e.Types + '' :  e.Tipos1 }
                    spriteSrc={e.spriteSrc ? e.spriteSrc : Logo}
                    />
                    
                    ))}
         </div>
        </div>
        </div>
  

       

        



  
      



    












        </React.StrictMode>

      






    );
};

export default  HomePokemon;