const mongoose = require('mongoose');
//Esse seria o pet
// estrutura da entidade
const SpotSchema = new mongoose.Schema({
    image: String,
    nome: String,
    descricao: String,
    cidade: String,
    uf: String,
    idade: Number,
    sexo: String,
    porte: String,
    raca: String,
    situacao: String,
    categorias: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  }, {
    toJSON: {
      virtuals: true,
    },
});
//novo campo, não exite no bd, vai ser csriado pelo js
  SpotSchema.virtual('image_url').get(function() {
    return `http://localhost:3333/files/${this.image}`
  }) //todosos dados do spot


 module.exports = mongoose.model('Spot', SpotSchema);
