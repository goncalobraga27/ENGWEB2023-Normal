var mongoose = require("mongoose");

var registoSchema = new mongoose.Schema({
    
        "Número de Registo": Number,
        "Código de rua": Number,
        "Rua": String,
        "Local": String,
        "Freguesia": String,
        "Espécie": String,
        "Nome Científico": String,
        "Origem": String,
        "Data de Plantação":String,
        "Estado": String,
        "Caldeira":String,
        "Tutor": String,
        "Implantação": String,
        "Gestor": String,
        "Data de actualização": String,
        "Número de intervenções": Number,
        "_id": String
});

module.exports = mongoose.model("plantas", registoSchema);