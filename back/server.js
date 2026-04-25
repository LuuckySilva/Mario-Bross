const express = require('express');
const cors = require('cors');
const orcamentosRouter = require('./routes/orcamentos');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'https://mario-bross-six.vercel.app'
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS bloqueado'));
    }
  }
}));

app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ status: 'ok', message: 'Mario API online 🍄' });
});

app.use('/orcamentos', orcamentosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});