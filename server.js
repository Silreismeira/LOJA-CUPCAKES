// Importar o Express
const express = require('express');

// Criar uma instância do aplicativo Express
const app = express();

// Definir a porta em que o servidor vai rodar
const port = 3000;

// Servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
