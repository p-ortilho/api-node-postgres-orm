const express = require("express");
const router = express.Router();

let produtos = [
    { id: 1, nome: "Camiseta", preco: 29.99, estoque: 100 }
];

// Listar todos os produtos
router.get("/", (req, res) => {
    if (produtos.length === 0) {
        return res.status(404).json({ erro: "Nenhum produto encontrado!" });
    }
    res.status(200).json(produtos);
});

// Listar produto específico
router.get("/produto/:id", (req, res) => {
    const idProduto = parseInt(req.params.id, 10);
    const produtoPesquisado = produtos.find(produto => produto.id === idProduto);

    if (!produtoPesquisado) {
        return res.status(404).json({ erro: "Produto não encontrado!" });
    }

    res.status(200).json(produtoPesquisado);
});

// Criar novo produto
router.post("/novo-produto", (req, res) => {
    const { nome, preco, estoque } = req.body;

    if (!nome || !preco || !estoque) {
        return res.status(400).json({ erro: "Campos obrigatórios: 'nome', 'preco', 'estoque'." });
    }

    const novoId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
    const novoProduto = { id: novoId, nome, preco, estoque };

    produtos.push(novoProduto);
    res.status(201).json({produto: novoProduto });
});

// Atualizar produto
router.put("/atualizar/:id", (req, res) => {
    const idProduto = parseInt(req.params.id, 10);
    const dadosRequisicao = req.body;

    const indice = produtos.findIndex(produto => produto.id === idProduto);
    if (indice === -1) {
        return res.status(404).json({ erro: "Produto não encontrado!" });
    }

    // Atualizar apenas os campos fornecidos
    if (dadosRequisicao.nome) produtos[indice].nome = dadosRequisicao.nome;
    if (dadosRequisicao.preco) produtos[indice].preco = dadosRequisicao.preco;
    if (dadosRequisicao.estoque) produtos[indice].estoque = dadosRequisicao.estoque;

    res.status(200).json({produto: produtos[indice]});
});

// Deletar produto
router.delete("/deletar/:id", (req, res) => {
    const idProduto = parseInt(req.params.id, 10);
    const indice = produtos.findIndex(produto => produto.id === idProduto);

    if (indice === -1) {
        return res.status(404).json({ erro: "Produto não encontrado!" });
    }

    const produtoRemovido = produtos.splice(indice, 1);
    res.status(200).json({produto: produtoRemovido[0] });
});

module.exports = router;
