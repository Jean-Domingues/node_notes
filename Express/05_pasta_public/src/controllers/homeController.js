exports.paginaInicial = (req, res) => {
  res.render('index')
}

exports.postRequest = (req, res) => {
  res.send('Ola tudo bem?')
}