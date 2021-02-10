const writeFile = require('./escrever');
const path = require('path');

const fullPath = path.resolve(__dirname, 'teste.json');

const pessoas = [
  { nome: 'jean'},
  { nome: 'Camila'},
  { nome: 'jão'},
  { nome: 'Gian'},
  { nome: 'Gabriel'},
  { nome: 'Marcos'},
]

const json  = JSON.stringify(pessoas, '', 2)

writeFile(fullPath, json)