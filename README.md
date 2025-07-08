# Desafio Técnico – Perfil de Usuário

Este projeto é uma solução para o desafio técnico da Sync360.io. O objetivo é desenvolver uma interface web onde o usuário possa visualizar e editar seu perfil, com os dados salvos em um banco de dados MySQL.

---

## Pré-requisitos

- Node.js 18 ou superior instalado na máquina

---

## Funcionalidades

- Exibição das informações do usuário:
  - Imagem de perfil
  - Nome completo
  - Idade
  - Rua, bairro e cidade
  - Biografia

- Edição dos dados com validação
- Upload de imagem via Cloudinary
- Salvamento dos dados em banco de dados MySQL
- Interface responsiva (mobile e desktop)

---

## Tecnologias Utilizadas

### Frontend:
- React
- Vite
- TailwindCSS
- JavaScript

### Backend:
- Node.js
- Express
- MySQL2
- Dotenv
- CORS

---

## Como rodar localmente

### 1. Baixe o projeto e extraia os arquivos

A estrutura do projeto está organizada assim:

```
desafio-tecnico/
├── backend/
├── frontend/

```

---

### 2. Inicie o backend

1. Abra o terminal na pasta `backend`
2. Instale as dependências:

npm install

3. Rode o servidor:

node index.js

O backend estará rodando em: `http://localhost:3001`

> ⚠️ O banco de dados já está hospedado e configurado. Não é necessário criar tabelas nem configurar `.env`.

---

### 3. Inicie o frontend

1. Abra o terminal na pasta `frontend`
2. Instale as dependências:

npm install

3. Inicie a aplicação:

npm run dev

O frontend estará disponível em: `http://localhost:5173`

---

### Pronto!

- A aplicação estará funcionando normalmente.
- O banco de dados MySQL e o Cloudinary já estão conectados e prontos para uso.
- Não é necessário criar tabelas, configurar ambiente ou modificar variáveis.

---

## Observações

- Os dados são salvos para um único usuário (ID 1), conforme implementação deste projeto.
- O Cloudinary está configurado para aceitar uploads sem necessidade de login.
- Caso queira testar o upload de imagem, clique na foto de perfil enquanto estiver no modo de edição.

---

## Autora

Desenvolvido com carinho por **Letícia Maia**  