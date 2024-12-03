# 🛍️ API de Produtos

📦Esta é uma API simples para gerenciar produtos utilizando Node.js, Express, PostgreSQL e Sequelize. O objetivo nesse estudo foi a utilização de uma ORM para trabalhar com o Banco de Dados sem usar SQL diretamente no código, melhorando assim a segurança da aplicação.🚀

## Pré-requisitos 📋

- Node.js instalado 💻
- PostgreSQL instalado e configurado 🗄️

# Endpoints 🌐

### Listar todos os produtos 📋

- **URL:** `/produtos`
- **Método:** `GET`
- **Resposta de Sucesso:** `200 OK` (lista de produtos) 🟢

### Listar produto específico 🔍

- **URL:** `/produtos/produto/:id`
- **Método:** `GET`
- **Parâmetros de URL:** `id` (ID do produto)
- **Resposta de Sucesso:** `200 OK` (produto específico) 🟢
- **Resposta de Erro:** `404 Not Found` (produto não encontrado) 🔴

### Criar novo produto ➕

- **URL:** `/produtos/novo-produto`
- **Método:** `POST`
- **Corpo da Requisição:** `{"nome": "string", "preco": "number", "estoque": "number"}`
- **Resposta de Sucesso:** `201 Created` (produto adicionado) 🟢
- **Resposta de Erro:** `400 Bad Request` (campos obrigatórios ausentes) 🔴

### Atualizar produto 🔄

- **URL:** `/produtos/atualizar/:id`
- **Método:** `PUT`
- **Parâmetros de URL:** `id` (ID do produto)
- **Corpo da Requisição:** `{"nome": "string", "preco": "number", "estoque": "number"}`
- **Resposta de Sucesso:** `200 OK` (produto atualizado) 🟢
- **Resposta de Erro:** `404 Not Found` (produto não encontrado) 🔴

### Deletar produto 🗑️

- **URL:** `/produtos/deletar/:id`
- **Método:** `DELETE`
- **Parâmetros de URL:** `id` (ID do produto)
- **Resposta de Sucesso:** `200 OK` (produto deletado) 🟢
- **Resposta de Erro:** `404 Not Found` (produto não encontrado) 🔴