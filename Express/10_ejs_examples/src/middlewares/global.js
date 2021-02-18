module.exports = (req, res, next) => {
  res.locals.varLocal = 'Variavel local'
  console.log('Middleware global');
  next()
}