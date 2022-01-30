import  React  from 'react';



export default function PaginadoComp ({PokemonPorPagina,allPokemons,paginado}) {
const NumDpag = [];

for(let i = 0 ; i<= Math.ceil(allPokemons/PokemonPorPagina); i++){
    NumDpag.push(i+1)

}
return (
    <nav>
     <ul className='paginado'>
         {  NumDpag &&
          NumDpag.map(Numero => (
             <li className='numero'>
           <a onClick={() => paginado(Numero)}>{Numero}</a>
           </li> 
          ))}
     </ul>


    </nav>

)

}