const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();

const DB_PATH = path.join(__dirname, '..', 'db.json');

async function lerDB() {
  const data = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

async function salvarDB(data) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

router.post('/', async (req, res) => {
  const { nome, telefone, duvida } = req.body;

  if (!nome || !telefone || !duvida) {
    return res.status(400).json({ erro: 'Nome, telefone e mensagem são obrigatórios.' });
  }

  const db = await lerDB();

  const novoOrcamento = {
    id: Date.now().toString(),
    nome,
    telefone,
    duvida,
    status: 'pendente',
    criadoEm: new Date().toISOString()
  };

  db.orcamentos.push(novoOrcamento);
  await salvarDB(db);

  res.status(201).json({ sucesso: true, orcamento: novoOrcamento });
});

router.get('/', async (req, res) => {
  const db = await lerDB();
  res.json(db.orcamentos);
});

module.exports = router;