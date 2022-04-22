const Spot = require("../models/Spot");
const User = require("../models/User");

//controle dos pets/spot
module.exports = {
  //Listagem de spots por tecnologia
  //vai buscar só aquela tecnologia tech
  async index(req, res) {
    const { categoria } = req.query;
    const spots = await Spot.find({ categorias: categoria });

    return res.json(spots);
  },



  async store(req, res) {
    const { filename } = req.file;
    const { nome, categorias, descricao,
      cidade,
      uf,
      idade,
      sexo,
      porte,
      raca,
      situacao, } = req.body;
    const { user_id } = req.headers;
    console.log('store', user_id, nome, categorias)


    //verificar se o usuario existe pelo o id
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });

    }

    const spot = await Spot.create({
      user: user_id,
      image: filename,
      nome,
      categorias: categorias.split(",").map((categoria) => categoria.trim()), //tensformando em array
      descricao,
      cidade,
      uf,
      idade,
      sexo,
      porte,
      raca,
      situacao,
    });
    console.log('creat', user_id, nome, categorias,descricao, cidade)

    return res.json({ spot });

  },

  // async update (req, res) {
  //   const spot = await Spot.updateOne(req.body)


  //     return res.status(200).send({ message: 'editado' })



  // },

  async destroy (req, res) {
    const spot = await Spot.deleteOne(req.params.id)

    // if (spot.user_id !== params.user.id) {
      return res.status(200).send({ message: 'deletado' })
    // }


  },

};




// o techs vem como: reactJs, React Native, Java, Springboot etc...
// techs.split(',') pega o que tiver separado por ,
// map(tech => tech.trim()) -> percorre cada tech e tira os espacos com o trim()


//Criar a rota apagar no Node.js
