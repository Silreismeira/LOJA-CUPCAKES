const express = require('express');
const path = require('path');

const app = express();

// Defina o diretório público para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal para servir o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Exporte a aplicação como uma função serverless
module.exports = app;
