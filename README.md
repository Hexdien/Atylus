# NoxDigital — Landing Page

Stack: React + Vite + Tailwind CSS (frontend) · Express.js (backend) · Docker Compose

---

## Subindo com Docker Compose

### 1. Pré-requisitos
Docker e Docker Compose instalados na máquina.

### 2. Configure o backend
  cp backend/.env.example backend/.env
  # Edite backend/.env com suas credenciais SMTP (opcional para email de leads)

### 3. Suba tudo
  docker compose up --build -d

O site fica disponível em http://localhost

---

## Expondo via Cloudflare Tunnel (demo para o cliente)

  cloudflared tunnel --url http://localhost:80

Copie a URL gerada (ex: https://xxxx.trycloudflare.com) e envie para o cliente.
Tunel temporário, gratuito, sem precisar de conta.

---

## Desenvolvimento local (sem Docker)

Frontend:
  npm install
  npm run dev        # http://localhost:5173

Backend:
  cd backend
  cp .env.example .env
  npm install
  npm run dev        # http://localhost:3001

Para o frontend chamar a API local, adicione ao vite.config.js:
  server: { proxy: { '/api': 'http://localhost:3001' } }

---


## Personalizações rápidas

Trocar nome da empresa:
  Busque "NoxDigital" em todos os .jsx e substitua.

Trocar cores (src/index.css):
  --color-ink: #0f0e0d
  --color-paper: #f5f2ee
  --color-accent: #c8a96e
  --color-accent-dark: #8b6914

Textos, cases e depoimentos:
  Tudo em arrays no topo de cada componente.

Conectar WhatsApp após envio do formulário (Contact.jsx, após setSent(true)):
  const msg = encodeURIComponent(`Olá! Me chamo ${form.nome}...`)
  window.open(`https://wa.me/55SEUNUMERO?text=${msg}`, '_blank')

---

## Email de leads (backend/.env)

  SMTP_HOST=smtp.gmail.com
  SMTP_PORT=587
  SMTP_USER=seuemail@gmail.com
  SMTP_PASS=sua_app_password_google
  LEAD_EMAIL=ondequerreceber@email.com

Sem SMTP configurado, leads ficam apenas no log do container:
  docker logs noxdigital_backend

---

## Comandos úteis

  docker compose logs -f          # logs em tempo real
  docker compose down             # parar tudo
  docker compose up --build -d    # rebuild após mudanças
  docker logs noxdigital_backend  # ver leads capturados
