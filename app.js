const express = require("express"); // Importa o express
const app = express();              // Inicializa o express
const port = 3000;

// Criar middleware para interpretar o corpo da requisição
app.use(express.json());

// Importa as rotas
const routers = require("./routes/produtos");

app.use("/produtos", routers);

app.listen(port, () => console.log(`Servidor está rodando na porta http://localhost:${port}`));