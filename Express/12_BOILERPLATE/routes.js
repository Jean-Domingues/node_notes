const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Decide qual controller vai ser responsável pela rota
route.get('/', homeController.paginaInicial);
route.post('/', homeController.postRequest);

route.get('/contato', contatoController.paginaInicial)

module.exports = route;
