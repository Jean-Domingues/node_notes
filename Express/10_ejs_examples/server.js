require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit('pronto');
  })
  .catch((e) => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/global');

// Diz o formato esperado no body em requisições POST
app.use(express.urlencoded({ extended: true }));

// Seta a nossa pasta de conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'asdasdasdadasdasda',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})

app.use(sessionOptions)
app.use(flash())

// Seta a nossa pasta de views, qual vai ser a pasta base para a função render
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Seta qual engine vamos utilizar para renderizar o nosso "Super HTML"
app.set('view engine', 'ejs');

// Seta o middleware global, todas as requisições vão passar por ele
app.use(middleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Server On Air: http://localhost:3000');
  });
});
