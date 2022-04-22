const Spot = require("../models/Spot");

//Dashboar é a listagem de pet do user --> seria tela que user vai ver seus pets cadastrados
module.exports = {
  //listagem dos spots do usuario logado
  async show(req, res) {
    const { user_id } = req.headers;
    const spots = await Spot.find({ user: user_id });
    return res.json(spots);
  }
}


//Tela de usuario logado!!!!
//show get --> retorna os spots do user
