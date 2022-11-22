const Sequelize = require ('sequelize');

const sequelize = new Sequelize('allan_jr', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});


sequelize.authenticate()
.then(function(){
    console.log("Conexão com banco de dados realizado com sucesso!!!")
}).catch(function(){
    console.log("Erro: não foi possivel fazer a conexão com o banco de dados")
})


module.exports = sequelize;
