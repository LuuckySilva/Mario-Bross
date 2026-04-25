# 🍄 Mario & Luigi Encanadores — Full Stack

> Landing page comercial temática com back-end real, painel administrativo e deploy em produção.

[![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)](https://mario-bross-six.vercel.app)
[![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)](https://mario-luigi-api.onrender.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://github.com/LuuckySilva/Mario-Bross)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://github.com/LuuckySilva/Mario-Bross)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://github.com/LuuckySilva/Mario-Bross)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://github.com/LuuckySilva/Mario-Bross)

---

## 🚀 Demo

🌐 **Site:** [mario-bross-six.vercel.app](https://mario-bross-six.vercel.app)
🔗 **API:** [mario-luigi-api.onrender.com](https://mario-luigi-api.onrender.com)
🛠 **Painel Admin:** `https://mario-bross-six.vercel.app/admin.html`
🔑 **Senha do painel:** `mario123`

---

## 🎮 Sobre o Projeto

Os encanadores mais famosos do Reino dos Cogumelos agora têm site — e back-end de verdade!

Este projeto evoluiu de uma landing page estática para uma aplicação full stack completa. O tema Mario Bros foi escolhido para tornar o portfólio memorável e diferenciado, enquanto a arquitetura demonstra habilidades técnicas reais de mercado.

**O que foi construído:**
- Front-end com 5 seções interativas e deploy na Vercel
- API REST própria em Node.js + Express com deploy no Render
- Painel administrativo para gestão de orçamentos
- Integração real entre front e back via Fetch API

---

## ✨ Funcionalidades

### Front-end
- ✅ Hero section com vídeo de fundo e formulário flutuante
- ✅ Seção de serviços com cards interativos e hover animado
- ✅ Contadores animados com IntersectionObserver
- ✅ Carrossel de depoimentos com autoplay e navegação por dots
- ✅ FAQ accordion com animação CSS pura
- ✅ Seção Fale Conosco com formulário integrado à API
- ✅ Scroll reveal em todas as seções
- ✅ Botão WhatsApp fixo
- ✅ Layout responsivo (mobile + desktop)

### Back-end
- ✅ API REST com Node.js + Express
- ✅ Rota `POST /orcamentos` — recebe e salva orçamentos
- ✅ Rota `GET /orcamentos` — lista todos os orçamentos
- ✅ Rota `PATCH /orcamentos/:id` — atualiza status
- ✅ Persistência em `db.json`
- ✅ CORS configurado para produção
- ✅ Validação de dados no servidor

### Painel Admin
- ✅ Login com senha
- ✅ Listagem de orçamentos em cards
- ✅ Filtro por status (pendente / resolvido)
- ✅ Botão "Marcar como resolvido" com atualização em tempo real
- ✅ Formatação de data em pt-BR

---

## 🛠 Stack

| Camada | Tecnologia |
|---|---|
| Front-end | HTML5, CSS3, JavaScript ES6+ |
| Back-end | Node.js, Express |
| Banco de dados | JSON (db.json) |
| Deploy front | Vercel |
| Deploy back | Render |
| Versionamento | Git + GitHub |

---

## 📡 Rotas da API

Base URL: `https://mario-luigi-api.onrender.com`

| Método | Rota | Descrição |
|---|---|---|
| GET | `/ping` | Verifica se a API está online |
| GET | `/orcamentos` | Lista todos os orçamentos |
| POST | `/orcamentos` | Cria novo orçamento |
| PATCH | `/orcamentos/:id` | Atualiza status do orçamento |

**Exemplo POST `/orcamentos`:**
```json
{
  "nome": "Peach Toadstool",
  "telefone": "35999999999",
  "duvida": "Cano estourado na cozinha"
}
```

**Resposta:**
```json
{
  "sucesso": true,
  "orcamento": {
    "id": "1234567890",
    "nome": "Peach Toadstool",
    "telefone": "35999999999",
    "duvida": "Cano estourado na cozinha",
    "status": "pendente",
    "criadoEm": "2026-04-25T13:00:00.000Z"
  }
}
```

---

## 📁 Estrutura do Projeto

Mario-Bross/
├── back/
│   ├── routes/
│   │   └── orcamentos.js   # Rotas da API
│   ├── db.json             # Banco de dados
│   ├── server.js           # Servidor Express
│   ├── .gitignore
│   └── package.json
├── front/
│   ├── assets/             # Imagens e vídeo
│   ├── index.html          # Página principal
│   ├── admin.html          # Painel administrativo
│   ├── style.css           # Estilos principais
│   ├── admin.css           # Estilos do painel
│   ├── scripts.js          # JavaScript principal
│   └── admin.js            # JavaScript do painel
└── README.md

---

## ⚙️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/LuuckySilva/Mario-Bross.git

# Entre na pasta do back-end
cd Mario-Bross/back

# Instale as dependências
npm install

# Inicie o servidor
node server.js
# API rodando em http://localhost:3000

# Abra o front com Live Server
# Arquivo: front/index.html
```

---

## 📈 Aprendizados técnicos

- Criação de API REST do zero com Node.js + Express
- Persistência de dados com `fs.promises`
- Integração front-back via Fetch API com tratamento de erros
- CORS configurado para múltiplas origens
- `IntersectionObserver` para scroll reveal e contadores animados
- Deploy separado de front (Vercel) e back (Render)
- Organização de projeto full stack em monorepo

---

## 👨‍💻 Autor

**Lucas Silva**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/olucas-silvaa/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/LuuckySilva)

---

*Projeto desenvolvido como parte da jornada de transição de carreira para tecnologia.*
