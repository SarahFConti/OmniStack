const mongoose = require('mongoose');

// estrutura da entidade
const UserSchema = new mongoose.Schema({
    // imageUser: String,
    // nome: String,
    email: String,
    // DataNascimento: Date,
    // telefone: Number,
    // descricao: String,
    // redeSocial: String,
    // active: Boolean,



})
 module.exports = mongoose.model('User', UserSchema);
