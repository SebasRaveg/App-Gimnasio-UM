module.exports = {
    port: process.env.PORT || 9689,
    
    //LOCAL
    //db: process.env.MONGODB || 'mongodb://localhost:27017/registropersonas', 

    //NUBE
    db: process.env.MONGODB || 'mongodb://SRaveG:S32314RG@apirestdb-shard-00-00.btt1l.mongodb.net:27017,apirestdb-shard-00-01.btt1l.mongodb.net:27017,apirestdb-shard-00-02.btt1l.mongodb.net:27017/resgistropersonas?ssl=true&replicaSet=atlas-iro03j-shard-0&authSource=admin&retryWrites=true&w=majority',
    SECRET_TOKEN: 'miclavedetokens'
}