const express = require("express");
const sequelize = require("./config/database");
const routers = require("./routes/produtos");
const app = express();
const port = 6000;

app.use(express.json());

// Sincronizar com o banco de dados
// sequelize.sync()
//     .then(() => console.log("Banco de dados sincronizado"))
//     .catch(error => console.log("Erro ao sincronizar banco de dados:", error));

async function sincronizarBancoDeDados() {
    try {
        await sequelize.sync();
        console.log("Banco de dados sincronizado");
    } 
    catch (error) 
    {
        console.log("Erro ao sincronizar banco de dados:", error);
    }
}

sincronizarBancoDeDados();

app.use('/produtos', routers);

// Rotas e lógica continuam...
app.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`));