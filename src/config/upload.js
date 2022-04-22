const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext)
            cb(null, `${name}-${Date.now()}${ext}`);
        }
    }),
};

//express nao entende o formato de multipart form (upload)
// ent instalamos uma lib multer
// a pasta config foi para configurar o multer nesse arq
// storage -> como o multer vai armazenar os upload.
// multer.diskStorage -> ele vai salvar as imagens aqui na aplicacao
// destination -> define qual pasta sera guardado
// na raiz foi criado o upload onde vai ter as imagens
// path.resolve -> ajuda a separar o caminho por , para q todo sistema operacional possa entender o caminho
// dirname -> informa o diretorio que definimos
// filemame -> usamos para defnir que os uploads teram um nome e nao um id aleatorio
// req -> minha req file ->  dados do arq cb -> callback que eh uma funcao que vai ser chamada quando o nome do arq tiver pronto
// null -> um erro caso houvesse
// `${file.fieldname} -> nome do arq que o user colocou
// `${file.fieldname}-${Date.now()}${path.extname}` -> TEMPLATE STRING
//${path.extname(file.originalname)} -> pega o nome original da img e sua extensao
