const initialState = {
    pokemons:[],
    pokemon:[],
    tipo:[]
}
const rootReducer = (state = initialState, action) => {
    switch(action.type) { 
        case "GET_POKEMONS":
            return {
              ...state,
              pokemons: action.payload,
            };
          case "GET_NAME":
        return{
            ...state,
            pokemon:action.payload,

        };

        case 'GET_ID':
            return {
                ...state,
                pokemon:action.payload
            }
            case 'CREATE_POKEMON':
                return {...state,pokemons : state.pokemons.concat(action.payload)}

             case 'GET_TYPES':
                 return{
                  ...state,
                  tipo:action.payload,
                }

            default: return {...state};
    }
}

    
export default rootReducer;