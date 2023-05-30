
var express = require('express');
var router = express.Router();
var Registo = require('../controllers/registo');

// GET /plantas/freguesias
router.get('/plantas/freguesias', function(req, res, next) {
  Registo.getFreguesias()
    .then(freguesias => {
      res.jsonp(freguesias)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de freguesias."})
    })
});

// GET /plantas/especies
router.get('/plantas/especies', function(req, res, next) {  
  Registo.getEspecies()
    .then(especies => {
      res.jsonp(especies)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de especies."})
    })
});

/* GET /plantas?especie=EEEE | GET /plantas?implant=AAA */
router.get('/plantas', function(req, res) {
  if (req.query.especie || req.query.implant) {
    if (req.query.especie) {
      Registo.getPlantas_Especie(req.query.especie)
        .then(dados => {
          res.status(200).json(dados)
        })
        .catch(erro => {
          res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de especies"})
      })
    } else if (req.query.implant) {
      Registo.getPlantas_Implant(req.query.implant)
        .then(dados => {
          res.status(200).json(dados)
        })
        .catch(erro => {
          res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de implantações"})
      })
    } else {
      res.status(520).json({mensagem: "Query inválida."})
    }
  } else {
    
    Registo.list()
      .then(dados => {
        res.status(200).json(dados)
      })
      .catch(erro => {
        res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de registos."})
      })
  }
});

// GET /plantas
router.get('/plantas', function(req, res, next) {
  Registo.list()
    .then(contratos => {
      res.jsonp(contratos)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de registos."})
    })
});

// GET /plantas/:id
router.get('/plantas/:id', function(req, res, next) {
  Registo.getPlanta(req.params.id)
    .then(contrato => {
      res.jsonp(contrato);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo"})
    })
});

// POST /plantas
router.post('/plantas',(req,res) => {
  Registo.addPlanta(req.body)
    .then(dados => {
      res.status(201).json(dados)
    })
    .catch(erro => {
      res.status(603).json({erro:erro,message: "Erro a adicionar um registo."})
    })

})

// DELETE /plantas/:id
router.delete('/plantas/:id',(req,res) => {
  Registo.deleteRegisto(req.params.id)
    .then(dados => {
      res.json(dados)
    })
    .catch(erro => {
      res.status(605).json({erro:erro,message: "Erro a apagar o registo."})
    })

})



module.exports = router;
