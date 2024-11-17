const { Pool } = require("pg"); // Importa o Pool do pacote pg

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    password: "12345",
    database: "produtos_api",
    port: 5432
});

module.exports = pool; // Exporta o pool para ser utilizado em outros arquivos