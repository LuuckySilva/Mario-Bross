const express = require('express');
const cors = require('cors');
const orcamentosRouter = require('./routes/orcamentos'); // ← essa linha existe?

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ status: 'ok', message: 'Mario API online 🍄' });
});

app.use('/orcamentos', orcamentosRouter); // ← essa linha existe?

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});