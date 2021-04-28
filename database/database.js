const Sequelize = require("sequelize");
const connection = new Sequelize('guiaperguntas', "root", "88105472", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;