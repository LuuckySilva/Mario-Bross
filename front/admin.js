const API_URL = 'http://localhost:3000';
const SENHA = 'mario123'; // trocar antes do deploy

let todosOrcamentos = [];
let filtroAtivo = 'todos';

// LOGIN
function fazerLogin() {
  const senha = document.getElementById('senhaInput').value;
  const erro = document.getElementById('erroLogin');

  if (senha === SENHA) {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('painel').style.display = 'block';
    carregarOrcamentos();
  } else {
    erro.style.display = 'block';
  }
}

// Permitir Enter no input de senha
document.getElementById('senhaInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') fazerLogin();
});

function sair() {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('painel').style.display = 'none';
  document.getElementById('senhaInput').value = '';
}

// CARREGAR ORÇAMENTOS
async function carregarOrcamentos() {
  try {
    const res = await fetch(`${API_URL}/orcamentos`);
    todosOrcamentos = await res.json();
    renderizar(todosOrcamentos);
  } catch (err) {
    document.getElementById('cards').innerHTML =
      '<p class="carregando">Erro ao carregar. Servidor offline?</p>';
  }
}

// RENDERIZAR CARDS
function renderizar(lista) {
  const cards = document.getElementById('cards');

  if (lista.length === 0) {
    cards.innerHTML = '<p class="sem-resultados">Nenhum orçamento encontrado.</p>';
    return;
  }

  cards.innerHTML = lista.map(o => `
    <div class="card ${o.status}" id="card-${o.id}">
      <h3>👤 ${o.nome}</h3>
      <p>📞 ${o.telefone}</p>
      <p>🔧 ${o.duvida}</p>
      <span class="status">${o.status === 'resolvido' ? '✅ Resolvido' : '🕐 Pendente'}</span>
      <span class="meta">Recebido em: ${formatarData(o.criadoEm)}</span>
      ${o.status === 'pendente'
        ? `<button class="btn-resolver" onclick="marcarResolvido('${o.id}')">Marcar como resolvido</button>`
        : ''}
    </div>
  `).join('');
}

// FILTRO
function filtrar(status) {
  filtroAtivo = status;

  // Atualizar botões ativos
  document.querySelectorAll('.btn-filtro').forEach(b => b.classList.remove('ativo'));
  document.getElementById(`f-${status}`).classList.add('ativo');

  const filtrados = status === 'todos'
    ? todosOrcamentos
    : todosOrcamentos.filter(o => o.status === status);

  renderizar(filtrados);
}

// MARCAR RESOLVIDO
async function marcarResolvido(id) {
  try {
    const res = await fetch(`${API_URL}/orcamentos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'resolvido' })
    });

    if (res.ok) {
      // Atualiza localmente sem recarregar tudo
      todosOrcamentos = todosOrcamentos.map(o =>
        o.id === id ? { ...o, status: 'resolvido' } : o
      );
      filtrar(filtroAtivo);
    }
  } catch (err) {
    alert('Erro ao atualizar. Tente novamente.');
  }
}

// FORMATAR DATA
function formatarData(iso) {
  return new Date(iso).toLocaleString('pt-BR');
}