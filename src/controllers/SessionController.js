const User = require("../models/User");

//Session é controle dos Users, o email do user --> parte de loign

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
    // const { filename } = req.file;
    const { email } = req.body;
    // const { nome, telefone, descricao, redeSocial } = req.body;
    //.find busca user pelo id e vamos buscar por id
    let user = await User.findOne({ email });
    if(!user) {
        let user = await User.create({
          // imageUser: filename,
          // nome,
          email,
          // telefone,
          // descricao,
          // redeSocial
        });
       return res.json({user});


    }
    console.log("Usuario", user)
    return res.json({user});
  },


};
