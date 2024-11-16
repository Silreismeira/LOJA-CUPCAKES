// Importa o pacote express
const express = require('express');
const app = express();
const port = 3000;

// Rota simples
app.get('/', (req, res) => {
  res.send('Bem-vindo à loja de cupcakes!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
