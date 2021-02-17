const HomeModel = require('../models/HomeModel');

exports.paginaInicial = (req, res) => {
  /**
   * Crio uma sessão no meu DB, e consigo ter acesso a ela em até 7 dias
   */

  // req.session.usuario = { nome: 'jean', logado: true}  -> criando um arquivo na sessão
  // console.log(req.session.usuario) -> { nome: 'jean', logado: true }

  res.render('index')
}

exports.postRequest = (req, res) => {
  res.send(req.body)
}