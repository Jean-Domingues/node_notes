exports.paginaInicial = (req, res) => {
  res.render('index')
  
  // res.send(
  //   `<form action="/" method="POST">
  //   Nome: <input type="text" name="nome">
  //   <button>Enviar</button>
  //   </form>
  //   `
  // );
}

exports.postRequest = (req, res) => {
  res.send(req.body)
}