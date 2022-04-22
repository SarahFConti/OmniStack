const mongoose = require("mongoose");

// estrutura da entidade
const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,  // se adoção foi aceita
  user: { // qual usuario solicitou a adoção
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  spot: { // spot/pet a qual o user quer adotar
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spot",
  },
});
module.exports = mongoose.model("Booking", BookingSchema);

//Solicitação de adoção
