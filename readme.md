# 🛍️ API de Produtos

Esta é uma API simples para gerenciar produtos utilizando Node.js, Express e PostgreSQL. 📦🚀

## Pré-requisitos 📋

- Node.js instalado 💻
- PostgreSQL instalado e configurado 🗄️


## Configuração do Banco de Dados 🔧

1. Crie um banco de dados PostgreSQL e configure as credenciais no arquivo `database/db.js`:
    ```javascript
    const pool = new Pool ({
        user: "postgres",
        host: "localhost",
        password: "password",
        database: "database",
        port: 5432
    });
    ```

2. Crie a tabela de produtos utilizando o script SQL em `SQL/create_table.sql`:
    ```sql
    CREATE TABLE produtos (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100),
        preco NUMERIC,
        estoque INTEGER
    );
    ```
---

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