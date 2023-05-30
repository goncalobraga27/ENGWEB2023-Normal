var Registo = require("../models/registo");


// GET /plantas
module.exports.list = () => {
    return Registo
    .find() 
     .then(dados=>{
         return dados
     })
     .catch(erro =>{
         return erro
     })
 
}
// GET /plantas/:id
module.exports.getPlanta = id => {
    return Registo
    .findOne({_id: id})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

// GET /plantas?implant=AAA
module.exports.getPlantas_Implant = param => {
    return Registo
        .find({ "Implantação": param})
        .then(dados => {
            return dados;
        })
        .catch(erro => {
            return erro;
        });
};
// GET /plantas?especie=EEEE
module.exports.getPlantas_Especie= param => {
    return Registo
        .find({ "Espécie": param})
        .then(dados => {
            return dados;
        })
        .catch(erro => {
            return erro;
        });
};
// GET /plantas/freguesias
module.exports.getFreguesias = () => {
    return Registo
        .distinct("Freguesia")
        .then(cursos => {
            return cursos;
        })
        .catch(erro => {
            return erro;
        });
};
// GET /plantas/especies
module.exports.getEspecies = () => {
    return Registo
        .distinct("Espécie")
        .then(inst => {
            return inst;
        })
        .catch(erro => {
            return erro;
        });
}; 
// POST /plantas
module.exports.addPlanta = p => {
    return Registo.create(p)
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}
// DELETE /plantas/:id
module.exports.deleteRegisto = id => {
    return Registo.deleteOne({_id:id})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}