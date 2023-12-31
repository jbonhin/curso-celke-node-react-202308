// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');

// Chamar a função express
const app = express();

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

// Testar conexão com banco de dados
//const db = require("./db/models");

// Incluir as CONTROLLERS
const home = require("./controllers/home");
const aboutsCompanies = require("./controllers/aboutsCompanies");
const contentsContacts = require("./controllers/contentsContacts");
const contactMenssage = require("./controllers/contactMessage");

// Criar as rotas
app.use('/home', home);
app.use('/about-companies', aboutsCompanies);
app.use('/contents-contacts', contentsContacts);
app.use('/contact-menssage', contactMenssage);

// Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});