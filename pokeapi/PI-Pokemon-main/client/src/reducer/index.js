const initialState = {
    pokemons:[],
    pokemonFilter:[],
    pokemon:[],
    pokemonID:[],
    tipo:[]
}
const rootReducer = (state = initialState, action) => {
    switch(action.type) { 
        case "GET_POKEMONS":
            return {
              ...state,
              pokemons: action.payload,
              pokemonFilter:action.payload,
            };
          case "GET_NAME":
        return{
            ...state,
            pokemons:action.payload,

        };

        case 'GET_ID':
            return {
                ...state,
                pokemonID:action.payload
            }
            case 'CREATE_POKEMON':
                return {...state,pokemons : state.pokemons.concat(action.payload)}

             case 'GET_TYPES':
                 return{
                  ...state,
                  tipo:action.payload,
                }


                case "FILTRADO_TIPO":
               const PokemonsAll = state.pokemonFilter;
              // const PokemonFilter = action.payload === 'todos' ? PokemonsAll : PokemonsAll.filter(po => po.Types ? po.Types.includes(action.payload) : po.Tipos === action.payload )            
              const eStadoArtificial = [] 
                 PokemonsAll.map( e => 
                    eStadoArtificial.push(
                   { id :e.id,
                    key :e.id,
                    name :e.name,
                    Tipos1 : e.Tipos ? e.Tipos.map(el => el.name + '' ) : e.Types , 
                    spriteSrc:e.spriteSrc
                   }))

                const PokemonFilter = action.payload === 'todos' ?  eStadoArtificial : eStadoArtificial .filter(e => e.Tipos1.includes(action.payload))
                    return {
                ...state,
                pokemons: PokemonFilter    
            
            }               
                   
            case "FILTRADO_DATABASE":
            const allPokemons = state.pokemonFilter
             const filterPokemon = action.payload === 'creado' ? allPokemons.filter( e => e.id.length > 3) : allPokemons.filter(e => e.id < 70) 

               return{
               ...state,
               pokemons:filterPokemon 
            }
            case   "ORDEN_ALFABETICO":
            let orderAL = action.payload === 'ascAL' ?
            state.pokemons.sort(function(a,b){
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1
                }
                return 0;
            })
            :
            state.pokemons.sort(function(a,b){
              if(a.name > b.name){
               return -1
                } 
              if(b.name > a.name){
                  return 1
              }
                 return 0
                
            })
           

            case "ORDEN_FUERZA":

                let orderFU = action.payload === 'descfu' ?
                state.pokemons.sort(function(a,b){
                    if(a.attack > b.attack){
                     return -1
                      } 
                    if(b.attack > a.attack){
                        return 1
                    }
                       return 0
                      
                  })
                 :
            state.pokemons.sort(function(a,b){
                if(a.attack > b.attack){
                    return 1;
                }
                if(b.attack > a.attack){
                    return -1
                }
                return 0;
            })
            
        



            default: return {...state};
    }
}

    
export default rootReducer;





//const PokemonFilter = action.payload === 'todos' ? PokemonsAll : PokemonsAll.filter(po => po.Types ? po.Types.includes(action.payload) : po.Tipos.name == action.payload)       