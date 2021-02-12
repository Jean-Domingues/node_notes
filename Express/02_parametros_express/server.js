const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(
    `<form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `
  );
});

// BODY = Corpo da minha requisição POST
app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Enviado!');
});

// QUERY PARMS = /search ?lenght=20&filter=dateCreated

// URL PARMS = /profile/:id  (http://site.com/profile/234)
// parâmetro opcional  = /profile/:id?
app.get('/testes/:id?', (req, res) => {
  console.log('URL params', req.params);
  console.log('Query params', req.query);
  res.send('oi');
});

app.listen(3000);
