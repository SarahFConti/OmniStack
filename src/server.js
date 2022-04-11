// require -> importa uma dependencia externa
const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack.jmf63.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

 //  get('/') -> rota onde o codigo sera executado
 // req -> qualquer tipo de parametro que o usuario estiver mandando na requisição
 // res -> resposta para a requisição do cliente(navegador)
 // send -> resposta tipo texto
// app.get('/', (req, res) =>{
//     return res.send('Hellow world')
// });
// para enviar e recebr dados para o front e back interpretar
// é preciso usar uma estrutura de dados como o json na res
//express -> ajuda na definicao de rotas

app.use(express.json());
app.use(routes);

app.listen(3333);
// dependecias q serao usadas apenas em ambiente de dev
// "devDependencies": {
//     "nodemon": "^2.0.15"
//   }