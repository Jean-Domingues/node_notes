exports.paginaInicial = (req, res) => {
  res.render('index') //retorna a página index da minha pasta /views, pois já foi configurado
}

exports.postRequest = (req, res) => {
  res.send('Ola tudo bem?')
}