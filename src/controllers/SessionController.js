const User = require("../models/User");
// recebe requisição
// trata a req conforme a regra de negocio
// e devolve uma resposta

//index, show, store, update, destroy
// index -> metodo que retorna listagem de Session
// show -> lista uma unica Session
// store -> criar uma session de session
// update -> alterar session de session
// destroy -> remover session
module.exports = {
  async store(req, res) {
    const { email } = req.body;
    //.find busca user pelo id e vamos buscar por id
    let user = await User.findOne({ email });
    if(!user) {
        let user = await User.create({ email })

    }

    return res.json(user);
  }
};
