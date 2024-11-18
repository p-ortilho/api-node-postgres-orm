const express = require("express");
const router = express.Router();
const pool = require("../database/db");

// Listar todos os produtos
router.get("/", async (req, res) => {
    try
    {
        const resulado = await pool.query("SELECT * FROM produtos");
        res.status(200).json(resulado.rows);
    }
    catch(error)
    {
        res.status(500).json({erro:error.message});
    }
});

// Listar produto específico
router.get("/produto/:id", async (req, res) => {
    const idProduto = parseInt(req.params.id, 10);

    try
    {
        const resultado = await pool.query("SELECT * FROM produtos WHERE id = $1", [idProduto]);

        if (resultado.rows.length === 0)
        {
            return res.status(404).json({erro:"Produto não encontrado!"});
        }

        res.status(200).json(resultado.rows[0]);
    }
    catch(error)
    {
        res.status(500).json({erro:error.message});
    }
});

// Criar novo produto
router.post("/novo-produto", async (req, res) => {
    const { nome, preco, estoque } = req.body;

    if (!nome || !preco || !estoque) {
        return res.status(400).json({ erro: "Campos obrigatórios: 'nome', 'preco', 'estoque'." });
    }
    
    try
    {
        (async () => {
            await pool.query("INSERT INTO produtos (nome, preco, estoque) VALUES ($1, $2, $3)", [nome, preco, estoque]);
        })();

        res.status(201).json({mensagem: "Produto adicionado com sucesso!"});
    }
    catch(error)
    {
        res.status(500).json({erro: error.mensagem});
    }
});

// Atualizar produto
router.put("/atualizar/:id", async (req, res) => {
    const idProduto = parseInt(req.params.id, 10);
    const {nome, preco, estoque} = req.body;

    try
    {
        const resultado = await pool.query("UPDATE produtos SET nome = $1, preco = $2, estoque = $3 WHERE id = $4 RETURNING *", [nome, preco, estoque, idProduto]);

        if (resultado.rows.length === 0)
        {
            return res.status(404).json({erro:"Produto não encontrado!"});
        }

        res.status(200).json({mensagem: "Produto atualizado com sucesso!"});
    }
    catch(error)
    {
        res.status(500).json({erro:error.message});
    }
});

// Deletar produto
router.delete("/deletar/:id", async (req, res) => {
    const idProduto = parseInt(req.params.id, 10);
    
    try
    {
        const resultado = await pool.query("DELETE FROM produtos WHERE id = $1", [idProduto]);

        if (resultado.rowCount === 0)
        {
            return res.status(404).json({erro:"Produto não encontrado!"});
        }

        res.status(200).json({mensagem: "Produto deletado com sucesso!"});
    }
    catch(error)
    {
        res.status(500).json({erro:error.message});
    }
});

module.exports = router;