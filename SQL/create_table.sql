create table produtos (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	preco DECIMAL(10, 2) NOT NULL,
	estoque SMALLINT NOT NULL
);

SELECT * FROM produtos;