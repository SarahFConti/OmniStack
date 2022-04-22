// require -> importa uma dependencia externa
const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const Spot = require('./models/Spot');


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

// app.delete('/pots', (req, res) =>{
//   return res.send('Hellow world')
// });

// app.update('/pots/:_id', (req, res) => {
//   const { id } = req.params;

  // const deletespots = Spot.findById(spot => spot.id == id );
  // return res.send(deletespots);

// });




// recupera o index com os dados

//   geeks.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array

//   return res.send('Hellow world');
//   }); // retorna os dados após exclusão


app.use(cors()); //  app.use(cors({ origin: ' http://localhost:3000/ '}))'', alterar o endereço que possa acessar, só esse endereço possa acessar
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(routes);

app.listen(3333);
// dependecias q serao usadas apenas em ambiente de dev
// "devDependencies": {
//     "nodemon": "^2.0.15"
//   }
