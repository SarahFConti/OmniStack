const Booking = require("../models/Booking");

//Booking seria a tela de solicitar a adoção do pet
module.exports = {
    async store(req, res) {
        const { user_id } = req.headers; //usuario que ta fazendo a reserva/adoção
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        // await booking.populate('spot').populate('user').execPopulate(); //para aparecer as informações do usuario e spot

        return res.json(booking);
    },
};

//Criação de uma solicitação de reserva/adoção
