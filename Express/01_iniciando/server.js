const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/contato', (req, res) => {
  res.send('<h1>Contate-me</h1>')
});

app.listen(3000)