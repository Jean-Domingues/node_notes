// https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/learn/lecture/16715718#announcements


// É referente as variáveis de ambiente no arquivo .env, que nós não queremos divulgar
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Faz a conexão com a nossa base de dados
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit('pronto');
  })
  .catch((e) => console.log(e));

// Biblioteca express para lidar com sessões
const session = require('express-session');
// Irá salvar as sessões na nossa base de dados
const MongoStore = require('connect-mongo')(session);
// Flash messages, mensagens autodestrutivas, só dá pra ver uma vez, são salvas nas sessões
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');

// Valida requisições para evitar ataques de sites externos
const csrf = require('csurf');
const { global, checkCsrfError, applyCsrf } = require('./src/middlewares/global');

app.use(helmet());

// Permite body em requisições POST
app.use(express.urlencoded({ extended: true }));
// Faz o parse do json, no body das requisições POST
app.use(express.json())

// Seta a nossa pasta de conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')));

// Configurações das sessões 
const sessionOptions = session({
  secret: 'asdasdasdadasdasda',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

// Seta a nossa pasta de views, qual vai ser a pasta base para a função render
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Seta qual engine vamos utilizar para renderizar o nosso "Super HTML"
app.set('view engine', 'ejs');

app.use(csrf());
// Seta o middleware global, todas as requisições vão passar por ele
app.use(global);
app.use(checkCsrfError);
app.use(applyCsrf);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Server On Air: http://localhost:3000');
  });
});
