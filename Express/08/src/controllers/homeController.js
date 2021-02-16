const HomeModel = require('../models/HomeModel');

exports.paginaInicial = (req, res) => {
  res.render('index')
}

exports.postRequest = (req, res) => {
  res.send(req.body)
}