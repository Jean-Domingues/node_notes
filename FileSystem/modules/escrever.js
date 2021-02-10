const fs = require('fs').promises;

module.exports = (path, date) => {
fs.writeFile(path, date, {flag: 'w'})
}