const { Router } = require('express');
const {Pokemones,getPokemons} = require('../metodos/PedidoApi')
const {  PokeTI } = require('../metodos/pedidosTipo')
const {PedidoHome} = require('../metodos/PedidoHome')
const { filterPoke,filterID} =require("../metodos/filters")
const  {Op} = require('sequelize')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/Pokemons', async (req,res) => {
   const PokeTotal = await PedidoHome();
      res.json(PokeTotal); 
  })  
  router.get('/pokemons/name', async (req,res) => {
    try{
    const  name  = req.query.name;
    const respuesta = await  filterPoke(name)
res.json(respuesta)

 }catch(e){
console.log(e)
    }
});

  
router.get("/pokemons/:id", async (req, res) => {
try { 
   const id = req.params.id;
   const PokeID = await filterID(id)
   res.json(PokeID )
}catch(e){
    console.log(e)
  }

}); 
//POST /pokemons:
//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
//Crea un pokemon en la base de datos

const { Pokemon, Tipo } = require('../db')


router.post('/pokemons', async (req,res) =>{
try{
const {
  tipo,
     name, 
     attack, 
    defense,
    speed, hp, weigth, height,} = req.body

const newPokemons = await Pokemon.create({
    name, 
    attack, 
    defense, 
    speed, 
    hp, 
    weigth,
     height,
})
 
let poketype = await Tipo.findAll({
  where: { name: tipo }
});
  newPokemons.addTipo(poketype);
  res.send('pokemon creado')
 }catch(e){
res.status(404)
}     
})



 
router.get('/types', async (req, res) =>{
const Types = await  PokeTI()
   res.send(Types)
})


router.get('/prueba', async (req,res) => {
  const pokeDB= await Pokemon.findAll({
    attributes:["name"] ,

      include: {
      model: Tipo,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
 

 res.json(pokeDB)

});


module.exports = router;

//GET /pokemons:
//Obtener un listado de los pokemons desde pokeapi.
//Debe devolver solo los datos necesarios para la ru ta principal






