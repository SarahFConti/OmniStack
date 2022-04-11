const mongoose = require('mongoose');

// estrutura da entidade
const SpotSchema = new mongoose.Schema({
    image: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }


});
 module.exports = mongoose.model('Spot', SpotSchema);