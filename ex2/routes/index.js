var express = require('express');
var router = express.Router();
var env = require('../config/env');
var Registo = require('../controllers/registo');
var axios = require('axios');

/* GET / */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Registo.list()
    .then(registos => {
      res.render('index', { rlist: registos, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de registos"})
    })
});

/* GET /:id */
router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Registo.getRegisto(req.params.id)
    .then(dados => {
      res.render('registo', { r: dados, d: data }); 
    })
    .catch(erro => res.status(602).json(({erro: erro})))
});

/* GET /especies/:id */
router.get('/especies/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Registo.getEspecie(req.params.id)
    .then(dados => {
      res.render('especie', { r: dados, d: data }); 
    })
    .catch(erro => res.status(602).json(({erro: erro})))
});
module.exports = router;

