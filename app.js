
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // Para interpretar JSON enviado nas requisições

// Dados de exemplo de cupcakes
const cupcakes = [
  { id: 1, nome: "Cupcake de Chocolate", preco: 5.00 },
  { id: 2, nome: "Cupcake de Baunilha", preco: 4.50 },
  { id: 3, nome: "Cupcake de Red Velvet", preco: 6.00 }
];

// Endpoint para listar todos os cupcakes
app.get('/api/cupcakes', (req, res) => {
  res.json(cupcakes);
});

// Endpoint para adicionar um pedido (exemplo simples)
app.post('/api/pedido', (req, res) => {
  const pedido = req.body; // Dados do pedido
  console.log('Pedido recebido:', pedido);
  res.status(201).send('Pedido realizado com sucesso');
});

// Servir arquivos estáticos (front-end)
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
