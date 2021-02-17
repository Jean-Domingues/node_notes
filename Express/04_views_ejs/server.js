const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

// Configurando o express para usar a pasta views como base
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Configurando a engine que vai renderizar as views
app.set('view engine', 'ejs')

app.use(routes);

app.listen(3000);
