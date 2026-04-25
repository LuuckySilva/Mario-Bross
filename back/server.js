const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste — confirma que servidor está vivo
app.get('/ping', (req, res) => {
  res.json({ status: 'ok', message: 'Mario API online 🍄' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});