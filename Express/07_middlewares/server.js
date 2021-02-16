const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/global')

// Diz o formato esperado no body em requisições POST
app.use(express.urlencoded({ extended: true }));

// Seta a nossa pasta de conteúdo estático 
app.use(express.static(path.resolve(__dirname, 'public')))

// Seta a nossa pasta de views, qual vai ser a pasta base para a função render
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Seta qual engine vamos utilizar para renderizar o nosso "Super HTML"
app.set('view engine', 'ejs')

// Seta o middleware global, todas as requisições vão passar por ele
app.use(middleware)
app.use(routes);

app.listen(3000);
