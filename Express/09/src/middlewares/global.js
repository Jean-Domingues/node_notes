module.exports = (req, res, next) => {
  console.log('Middleware global');
  next()
}