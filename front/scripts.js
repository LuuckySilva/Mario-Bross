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