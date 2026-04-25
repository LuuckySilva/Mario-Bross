const API_URL = 'https://mario-luigi-api.onrender.com';
// Formulário da seção Fale Conosco
const formContato = document.getElementById('formContato');

formContato.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = formContato.querySelector('button[type="submit"]');
  const nome = formContato.nome.value.trim();
  const telefone = formContato.telefone.value.trim();
  const duvida = formContato.duvida.value.trim();

  if (!nome || !telefone || !duvida) {
    alert('Preencha todos os campos!');
    return;
  }

  btn.textContent = 'Enviando...';
  btn.disabled = true;

  try {
    const response = await fetch(`${API_URL}/orcamentos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, telefone, duvida })
    });

    const data = await response.json();

    if (response.ok) {
      btn.textContent = 'Enviado! ✅';
      formContato.reset();
      setTimeout(() => {
        btn.textContent = 'Enviar Mensagem 🍄';
        btn.disabled = false;
      }, 2000);
    } else {
      alert(data.erro || 'Erro ao enviar.');
      btn.textContent = 'Enviar Mensagem 🍄';
      btn.disabled = false;
    }
  } catch (err) {
    alert('Servidor offline. Tente mais tarde.');
    btn.textContent = 'Enviar Mensagem 🍄';
    btn.disabled = false;
  }
});
// ===== CARROSSEL DE DEPOIMENTOS =====
const cards = document.querySelectorAll('.depoimento-card');
const dots = document.querySelectorAll('.dot');
let atual = 0;

function mostrarCard(index) {
  cards.forEach(c => c.classList.remove('ativo'));
  dots.forEach(d => d.classList.remove('ativo'));
  cards[index].classList.add('ativo');
  dots[index].classList.add('ativo');
}

document.getElementById('btnProximo').addEventListener('click', () => {
  atual = (atual + 1) % cards.length;
  mostrarCard(atual);
});

document.getElementById('btnAnterior').addEventListener('click', () => {
  atual = (atual - 1 + cards.length) % cards.length;
  mostrarCard(atual);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    atual = i;
    mostrarCard(atual);
  });
});

// Avança automaticamente a cada 5 segundos
setInterval(() => {
  atual = (atual + 1) % cards.length;
  mostrarCard(atual);
}, 5000);

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-pergunta').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const estaAberto = item.classList.contains('aberto');

    // Fecha todos
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('aberto'));

    // Abre o clicado (se estava fechado)
    if (!estaAberto) {
      item.classList.add('aberto');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.fale-conosco');
  const mascara = document.querySelector('.mascara-formulario');

  // Mostrar formulário
  window.mostrarform = function () {
    form.classList.add('ativo');
    mascara.classList.add('ativo');
  };

  // Esconder formulário
  window.esconderform = function () {
    form.classList.remove('ativo');
    mascara.classList.remove('ativo');
  };

  // Fechar ao clicar na máscara
  mascara.addEventListener('click', esconderform);

  // Envio via Fetch
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();
    const duvida = form.duvida.value.trim();

    if (!nome || !telefone || !duvida) {
      alert('Preencha todos os campos!');
      return;
    }

    btn.textContent = 'Enviando...';
    btn.disabled = true;

    try {
      const response = await fetch(`${API_URL}/orcamentos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, telefone, duvida })
      });

      const data = await response.json();

      if (response.ok) {
        btn.textContent = 'Enviado! ✅';
        form.reset();
        setTimeout(() => {
          esconderform();
          btn.textContent = 'Pedir Orçamento';
          btn.disabled = false;
        }, 2000);
      } else {
        alert(data.erro || 'Erro ao enviar. Tente novamente.');
        btn.textContent = 'Pedir Orçamento';
        btn.disabled = false;
      }
    } catch (err) {
      alert('Servidor offline. Tente mais tarde.');
      btn.textContent = 'Pedir Orçamento';
      btn.disabled = false;
    }
  });

});