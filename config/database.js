const mongoose = require('mongoose')

const conexao = async () => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/acltri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://UserAdmin:matheus2207@fiaptecnico.ekwgy.mongodb.net/fiap')
}
               
module.exports = conexao